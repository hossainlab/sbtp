import React from 'react';
import { TRACKS } from '../constants';

const TrackSection: React.FC = () => {
  return (
    <section id="tracks" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Choose Your <span className="text-blue-400">Specialization</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16">Tailored tracks designed for real-world research challenges.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRACKS.map((track) => (
            <div
              key={track.id}
              className="group glass rounded-3xl text-left transition-all duration-500 hover:-translate-y-2 border-slate-800 hover:border-blue-500/50 overflow-hidden bg-slate-950/60"
            >
              {/* Icon Header with Gradient */}
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${track.bgGradient} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-500" />
                <div className="relative z-10 text-8xl group-hover:scale-110 transition-transform duration-500">
                  {track.icon}
                </div>
                <div className="absolute inset-0 border-b border-slate-800/50 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{track.title}</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {track.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-[10px] uppercase font-black text-slate-500 tracking-wider mb-2">Theoretical Aspects</h4>
                    <p className="text-xs text-slate-300 font-medium">{track.theoreticalAspects}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black text-slate-500 tracking-wider mb-2">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {track.tools.map(tool => (
                        <span key={tool} className="px-2 py-1 rounded bg-slate-950/50 border border-slate-700 text-[10px] font-bold uppercase tracking-tight text-blue-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackSection;
