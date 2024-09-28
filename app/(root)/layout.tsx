import { ReactNode } from 'react';

import StreamVideoProvider from '@/poviders/StreamClientProvidet';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "LinkUp",
  description: "Video conferencing Web App",
  icons:{
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  );
};

export default RootLayout;