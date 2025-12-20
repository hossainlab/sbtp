import React, { useState, useEffect } from 'react';
import { Cpu, Activity, Database } from 'lucide-react';

const BioStreamAnimation: React.FC = () => {
  const dnaBases = "ATGC".split("");
  const [sequence, setSequence] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setSequence(prev => {
        const next = Array.from({ length: 40 }, () => dnaBases[Math.floor(Math.random() * 4)]).join(" ");
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-950 border-y border-white/5 py-4 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none" />

      {/* Moving DNA Sequence Layer 1 */}
      <div className="flex whitespace-nowrap overflow-hidden mb-2 opacity-20">
        <div className="animate-marquee flex space-x-8 text-[10px] mono font-bold text-blue-400 uppercase tracking-[1em]">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>A T G C G C T A A G T C C G A T G C A A T T G G C G A T C G A T G C T T A</span>
          ))}
        </div>
      </div>

      {/* Main Animation Area */}
      <div className="container mx-auto px-6 flex items-center justify-between relative z-20">
        <div className="flex items-center space-x-8">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-blue-500/50 uppercase tracking-widest mb-1">Process: Sequence Alignment</span>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <div className="mono text-xs text-emerald-400 font-medium">
                {sequence || "A T G C G C T A A G T C C G A T G C A A T T G G C G A T C G A T G C T T A"}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-12">
          <div className="flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-slate-600" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">HPC Computing</span>
          </div>
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-slate-600" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">scRNA-seq Stream</span>
          </div>
          <div className="flex items-center space-x-2">
            <Database className="w-4 h-4 text-slate-600" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">NCBI Integration</span>
          </div>
        </div>
      </div>

      {/* Moving DNA Sequence Layer 2 */}
      <div className="flex whitespace-nowrap overflow-hidden mt-2 opacity-20">
        <div className="animate-marquee-reverse flex space-x-8 text-[10px] mono font-bold text-emerald-400 uppercase tracking-[1em]">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>T A C G C G A T T C A G G C T A C G T T A A C C G C T A G C T A C G A A T</span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }
      `}} />
    </div>
  );
};

export default BioStreamAnimation;
