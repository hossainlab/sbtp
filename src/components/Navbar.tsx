import React, { useState, useEffect } from 'react';
import { APPLICATION_URL } from '../constants';

const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#2dd4bf', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M4 4C4 4 7 6 12 12S20 20 20 20" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 4C20 4 17 6 12 12S4 20 4 20" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.5 6.5H4" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.5 6.5H20" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.5 17.5H4" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.5 17.5H20" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 9H7.5" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16.5 9H15" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 15H7.5" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16.5 15H15" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="text-xl font-bold gradient-text">DeepBio</span>
  </div>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-2xl bg-slate-950/80' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="cursor-pointer">
          <Logo />
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#tracks" className="hover:text-blue-400 transition-colors">Tracks</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#curriculum" className="hover:text-blue-400 transition-colors">Curriculum</a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
        </div>
        <a
          href={APPLICATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/40"
        >
          Enroll Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
