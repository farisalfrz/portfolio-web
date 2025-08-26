"use client";

import { Poppins } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import { useIsDesktop } from '@/hooks/useIsDesktop';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {useIsDesktop() && <CustomCursor />}
        <div className="aurora-background"></div>
        <div className="dot-pattern"></div>
        {children}
      </body>
    </html>
  )
}