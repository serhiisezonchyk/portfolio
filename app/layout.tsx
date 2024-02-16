import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import TransitionProvider from '@/components/transitionProvider';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebCV',
  description:
    'It`s my personal website. Here you can see inforamation about me or write me. Looking for your offers.',
  keywords:
    'FullStack developer, JavaScript developer, Node.js Developer, React.js Developer, SQL, JS developer Ukraine, Next.js developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
