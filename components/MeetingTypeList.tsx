'use client'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { DefaultReactionsMenu, useStreamVideoClient, Call } from '@stream-io/video-react-sdk'
import { useToast } from "@/hooks/use-toast"

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] =
    useState<'isSchedulemeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  const { user } = useUser();
  const client = useStreamVideoClient(); 
  const[values, setValues] = useState({
    dateTime: new Date(),
    Description: '',
    link: ''
  })
  
  const [callDetails, setCallDetails] = useState<Call>()
  const { toast } = useToast()

  const createMeeting = async () => {
    if(!client || !user) return;

    try{
      if (!values.dateTime) {
        toast({ title: 'Please select a date and time' });
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call('default', id);

      if(!call) throw new Error("Failed to create a call");
      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.Description || 'Instant meeting';

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      })
      setCallDetails(call);
      if (!values.Description) {
        router.push(`/meeting/${call.id}`);
      }
      
      toast({title: "Meeting created"})
    } catch(error){
     console.log(error);
    }toast({
      title: "Failed to create meeting",
    })
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img='/icons/add-meeting.svg'
        title='New Meeting'
        description='Start an instant meeting'
        handleClick={() => setMeetingState('isInstantMeeting')}
        containerStyles='bg-orange-1'
      />

      <HomeCard
        img='/icons/schedule.svg'
        title='Schedule Meeting'
        description='Plan your Meeting'
        handleClick={() => setMeetingState('isSchedulemeeting')}
        containerStyles='bg-blue-1'
      />

      <HomeCard
        img='/icons/recordings.svg'
        title='View Recordings'
        description='Checkout your recordings'
        handleClick={() => setMeetingState('isJoiningMeeting')}
        containerStyles='bg-purple-1'
      />

      <HomeCard
        img='/icons/join-meeting.svg'
        title='Join Meeting'
        description='via invitation link'
        handleClick={() => setMeetingState('isJoiningMeeting')}
        containerStyles='bg-yellow-1'
      />

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  )
}

export default MeetingTypeList;
