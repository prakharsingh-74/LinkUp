import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });


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
      </body>
      </ClerkProvider>
    </html>
  );
}
