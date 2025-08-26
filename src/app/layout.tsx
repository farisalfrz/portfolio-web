// src/app/layout.tsx

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Faris Alfarizi | Web Developer Portfolio',
  description: 'Personal portfolio of Faris Alfarizi, a full-stack developer specializing in Next.js, AI, and modern web technologies.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CustomCursor />
        <div className="aurora-background"></div>
        {children}
      </body>
    </html>
  )
}