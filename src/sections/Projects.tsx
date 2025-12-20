import React from 'react';
import { Beaker, Calendar, Target } from 'lucide-react';
import { TRACKS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Beaker className="w-3 h-3" />
            <span>Research Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Upcoming <span className="text-blue-400">Research Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real-world bioinformatics projects designed to give you hands-on research experience in your chosen specialization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TRACKS.map((track) => (
            <div
              key={track.id}
              className={`group glass rounded-3xl overflow-hidden border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${track.bgGradient}`}
            >
              {/* Header */}
              <div className="relative px-8 py-6 border-b border-slate-800/50">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-4xl border border-slate-700/50">
                    {track.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{track.shortTitle}</h3>
                    <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Research Track</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 bg-slate-950/80">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Target className="w-4 h-4 text-blue-400" />
                    <h4 className="text-sm font-black text-blue-400 uppercase tracking-wider">Project Title</h4>
                  </div>
                  <p className="text-lg font-bold text-white leading-snug">
                    {track.project.name}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Research Focus</h5>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {track.project.focus}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Methods</h5>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {track.methods}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/50">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Calendar className="w-3 h-3" />
                        <span className="font-medium">
                          {new Date(track.project.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - {new Date(track.project.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold text-[10px] uppercase tracking-wider">
                        Upcoming
                      </div>
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

export default Projects;
