import React from 'react';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto px-6 py-8 mt-16 border-t border-slate-700/50">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Ikon Sosial Media */}
        <div className="flex items-center space-x-4 order-2 sm:order-1">
          <a href="https://github.com/farisalfrz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
            <FiGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/faris-alfarizi/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
            <FiLinkedin size={22} />
          </a>
          <a href="https://www.instagram.com/farisalfarizi__/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
            <FiInstagram size={22} />
          </a>
          <a href="https://saweria.co/farisalfarizi" target="_blank" rel="noopener noreferrer" className="relative w-5 h-5 hover:opacity-80 transition-opacity">
            <Image
              src="/images/saweria.png"
              alt="Saweria"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div>

        {/* Teks Copyright dan Credit */}
        <div className="text-center sm:text-right text-slate-400 text-sm order-1 sm:order-2">
          <p>Designed & Built by Faris Alfarizi © {currentYear}</p>
          <p className="mt-1">Powered by Next.js & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;