import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import CustomCursor from '@/components/CustomCursor';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins', 
});

export const metadata: Metadata = {
  title: "Faris Alfarizi's Portfolio",
  description: "Personal portfolio of Faris Alfarizi, a full-stack developer specializing in Next.js, AI, and modern web technologies.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body
        className="font-sans"
      >
        <CustomCursor />
        <div className="aurora-background"></div>
        {children}
      </body>
    </html>
  );
}
