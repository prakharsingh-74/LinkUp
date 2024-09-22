import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });
import '@stream-io/video-react-sdk/dist/css/styles.css';

export const metadata: Metadata = {
  title: "LinkUp",
  description: "Video conferencing Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        layout:{
          logoImageUrl: 'icons/yoom-logo.svg',
          socialButtonsVariant: 'iconButton',
        },
        variables:{
          colorText: '#fff',
          colorPrimary: '#0E78F9',
          colorBackground: '#1c1f2e',
          colorInputBackground: '#252a41',
          colorInputText: '#fff',
        }
      }}>
      <body className={`${inter.className} bg-dark-2`}>
        {children}
        <Toaster/>
      </body>
      </ClerkProvider>
    </html>
  );
}
