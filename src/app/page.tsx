import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faris Alfarizi | Web Developer Portfolio',
  description: 'Personal portfolio of Faris Alfarizi, a full-stack developer specializing in Next.js, AI, and modern web technologies.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6">
        
        <Hero />
        <Journey />
        <Skills />
        <Experience />
        <Projects />
        <Events />
        <Hobbies />
        <Contact />

      </main>
      <Footer />
    </>
  );
}