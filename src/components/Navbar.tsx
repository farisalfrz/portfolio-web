import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-slate-100 hover:text-blue-500 transition-colors">
          Faris Alfarizi.
        </a>
        <ul className="hidden md:flex items-center space-x-6">
          <li><a href="#journey" className="text-slate-300 hover:text-blue-500 transition-colors">Journey</a></li>
          <li><a href="#skills" className="text-slate-300 hover:text-blue-500 transition-colors">Skills</a></li>
          <li><a href="#experience" className="text-slate-300 hover:text-blue-500 transition-colors">Experiences</a></li>
          <li><a href="#projects" className="text-slate-300 hover:text-blue-500 transition-colors">Projects</a></li>
          <li><a href="#events" className="text-slate-300 hover:text-blue-500 transition-colors">Events</a></li>
          <li><a href="#hobbies" className="text-slate-300 hover:text-blue-500 transition-colors">Hobbies</a></li>
          <li><a href="#contact" className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500/10 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;