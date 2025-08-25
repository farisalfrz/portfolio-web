"use client";

import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const scrollOffset = -80; 

  return (
  <>
    <div className="h-[60px] md:h-[72px]"></div>
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          offset={scrollOffset}
          className="text-xl font-bold text-slate-100 hover:text-blue-500 transition-colors cursor-pointer"
        >
          Faris Alfarizi.
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link to="journey" smooth={true} duration={500} offset={scrollOffset} className="text-slate-300 hover:text-blue-500 transition-colors cursor-pointer">
              Journey
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={scrollOffset} className="text-slate-300 hover:text-blue-500 transition-colors cursor-pointer">
              Skills
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={scrollOffset} className="text-slate-300 hover:text-blue-500 transition-colors cursor-pointer">
              Experience
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={scrollOffset} className="text-slate-300 hover:text-blue-500 transition-colors cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link to="events" smooth={true} duration={500} offset={scrollOffset} className="text-slate-300 hover:text-blue-500 transition-colors cursor-pointer">
              Events
            </Link>
          </li>
          <li>
            <Link to="hobbies" smooth={true} duration={500} offset={scrollOffset} className="text-slate-300 hover:text-blue-500 transition-colors cursor-pointer">
              Hobbies
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={scrollOffset} className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500/10 transition-colors cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
  );
};

export default Navbar;