import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { APPLICATION_URL, KEY_STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-grid">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
          <Zap className="w-3 h-3" />
          <span>Professional Bioinformatics Training</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white">
          Specialized <span className="gradient-text">Bioinformatics</span> <br />
          Training Program (SBTP)
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          60-day intensive online hands-on program specialized in Cancer, Neuro, Infectious Diseases, and AgriBioinformatics.
          Bridge the gap between data and biological discovery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <a
            href={APPLICATION_URL}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center"
          >
            Join the 2026 Batch
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-300">Discount Alert 🏷️</p>
            <p className="text-blue-400 font-bold">30% OFF till Jan 10, 2026</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {KEY_STATS.map((stat, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-white/5 shadow-inner">
              <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
