import React from 'react';
import { Award } from 'lucide-react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass p-12 rounded-[3rem] bg-blue-600/5 border-blue-500/10">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Program <span className="text-blue-400">Benefits</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Award className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <p className="text-slate-300 font-semibold leading-relaxed group-hover:text-white transition-colors">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
