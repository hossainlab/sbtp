import React from 'react';
import { APPLICATION_URL } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 text-white">Investment in Your <span className="text-blue-400">Future</span></h2>

        <div className="max-w-xl mx-auto glass p-12 rounded-[3rem] border-2 border-blue-500/30 relative bg-slate-950/60 shadow-2xl">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl border border-blue-400/20">
            LIMITED SLOTS: 15 per track
          </div>

          <div className="mb-8">
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">Standard Fee</p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-4xl font-bold text-white">10,200 BDT</span>
              <span className="text-slate-600 text-2xl">/</span>
              <span className="text-4xl font-bold text-white">99 USD</span>
            </div>
          </div>

          <div className="p-8 bg-blue-600/10 rounded-3xl border border-blue-500/20 mb-10 group hover:bg-blue-600/20 transition-all duration-300">
            <p className="text-blue-400 font-black text-xl mb-1 uppercase tracking-tighter italic">30% Discount Opportunity</p>
            <p className="text-slate-300 text-sm mb-4">Enroll by <strong className="text-white">February 18, 2026</strong> for just</p>
            <div className="text-5xl font-black text-white mb-2">~7,140 BDT</div>
            <p className="text-blue-400 font-bold text-xs uppercase tracking-widest">or $69 USD</p>
          </div>

          <a
            href={APPLICATION_URL}
            className="block w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-xl hover:bg-blue-400 hover:text-white transition-all shadow-xl shadow-blue-900/20"
          >
            Enroll Now
          </a>
          <p className="mt-6 text-xs text-slate-500">Application Deadline: February 24, 2026</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
