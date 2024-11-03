# Video Conferencing Web App

A fully-featured video conferencing web application built using Next.js, TypeScript, Clerk for authentication, and Stream for real-time video and chat capabilities.

## 🚀 Features

- **Real-Time Video Conferencing**: Connect and communicate with multiple users in real-time.
- **User Authentication**: Secure user management with Clerk.
- **Instant Messaging**: Real-time chat during video sessions using Stream.
- **Responsive UI**: Optimized for both desktop and mobile devices.
- **Scalable**: Built with Next.js and TypeScript for maintainability and performance.

## 🛠️ Tech Stack

- **Next.js**: Framework for server-rendered React applications.
- **TypeScript**: Type-safe development for scalable code.
- **Clerk**: User authentication and management.
- **Stream**: Real-time messaging and video API.

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   
2. **Install dependencies:**
   npm install
      # or
   yarn install
   
3. Set up environment variables:
   Create a .env.local file in the root of your project and add the following variables:
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   STREAM_API_KEY=<your-stream-api-key>
   STREAM_SECRET=<your-stream-secret>

4. Run the development server:
   npm run dev
    # or
   yarn dev

Open http://localhost:3000 in your browser to see the app in action.

## 📝 Usage

1. Sign up / Log in: Users are authenticated through Clerk.
2. Join / Create a Room: Start or join a video conference.
3. Chat: Send and receive messages in real time during the call.

## 📁 Project Structure
Here's an overview of the project's structure:

├── components    # Reusable UI components
├── pages         # Next.js pages and API routes
├── lib           # Utility functions and external library setups
├── public        # Public assets
├── styles        # Global styles
└── README.md     # Project documentation


## 🧩 Key Libraries
@clerk/nextjs: For integrating Clerk's authentication in Next.js.
stream-chat-react: Components for the chat feature.
next-auth: Optional, if needed for additional auth setups.


## ⚙️ Deployment
To deploy this project:
Set up your environment variables in your deployment platform.
