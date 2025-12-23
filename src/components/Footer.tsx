import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#2dd4bf', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M4 4C4 4 7 6 12 12S20 20 20 20" stroke="url(#footerLogoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 4C20 4 17 6 12 12S4 20 4 20" stroke="url(#footerLogoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.5 6.5H4" stroke="url(#footerLogoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.5 6.5H20" stroke="url(#footerLogoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.5 17.5H4" stroke="url(#footerLogoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.5 17.5H20" stroke="url(#footerLogoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 9H7.5" stroke="url(#footerLogoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16.5 9H15" stroke="url(#footerLogoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 15H7.5" stroke="url(#footerLogoGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16.5 15H15" stroke="url(#footerLogoGradient)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="text-xl font-bold gradient-text">DeepBio</span>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div>
            <a href="#" className="mb-6 cursor-pointer inline-block">
              <Logo />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of bioinformatics researchers with specialized, hands-on professional training.
            </p>
            <div className="flex space-x-4">
              <Globe className="w-5 h-5 text-slate-500 hover:text-blue-400 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-slate-500 hover:text-blue-400 cursor-pointer transition-colors" />
              <Phone className="w-5 h-5 text-slate-500 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-blue-400">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-slate-600" />
                <span>deepbiobd@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-slate-600" />
                <span>+880 1843 381652</span>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="w-4 h-4 text-slate-600 mt-0.5" />
                <span>Mentored by DeepBio Limited and Big Bioinformatics Lab, CHIRAL</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-blue-400">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-400">
              <a href="#tracks" className="hover:text-white transition-colors">Research Areas</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#publications" className="hover:text-white transition-colors">Publications</a>
              <a href="#curriculum" className="hover:text-white transition-colors">Training Modules</a>
              <a href="#eligibility" className="hover:text-white transition-colors">Eligibility</a>
              <a href="#benefits" className="hover:text-white transition-colors">Assistantships</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#mentors" className="hover:text-white transition-colors">Mentors</a>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-900 text-center">
          <p className="text-xs text-slate-600 font-medium">
            © 2025 DeepBio Limited. All rights reserved.
            Strict compliance with national and international research standards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
