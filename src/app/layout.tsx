import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import NavBar from '@/components/NavBar';
// import BottomNav from '@/components/BottomNav';
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { AuthProvider } from '@/lib/AuthContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Zee App',
  description: 'Explore local dispensaries around Cape Town',
  themeColor: '#0f172a',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon-192x192.png',
    apple: '/icons/icon-512x512.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {/* <NavBar /> */}
          <main className="container">{children}</main>
          {/* <BottomNav /> */}
        </AuthProvider>

      </body>
    </html>
  );
}
