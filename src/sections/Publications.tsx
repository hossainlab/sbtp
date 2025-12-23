import React from 'react';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <BookOpen className="w-3 h-3" />
            <span>Published Research</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Our <span className="text-blue-400">Published Papers</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Showcasing cutting-edge bioinformatics research published in high-impact scientific journals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="group glass rounded-3xl overflow-hidden border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 flex flex-col"
            >
              {/* Image - Crystal clear, no overlays */}
              {pub.image && (
                <div className="relative w-full h-80 overflow-hidden bg-slate-900">
                  <img 
                    src={pub.image} 
                    alt={pub.title}
                    className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Journal and Year Info - Clean bar below image */}
              <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-bold text-blue-400 uppercase tracking-wide">{pub.journal}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/30">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-sm font-bold text-white">{pub.year}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-slate-950/80 flex-grow flex flex-col">
                <h3 className="text-base font-bold text-white leading-snug mb-4 group-hover:text-blue-400 transition-colors">
                  {pub.title}
                </h3>

                <div className="space-y-3 flex-grow">
                  <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Authors</h5>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pub.authors}
                    </p>
                  </div>

                  {pub.volume && pub.pages && (
                    <div className="text-xs text-slate-400">
                      <span className="font-semibold">Vol. {pub.volume}</span>
                      <span className="mx-2">|</span>
                      <span>Article {pub.pages}</span>
                    </div>
                  )}
                </div>

                {/* Footer with DOI Link */}
                <div className="pt-4 mt-4 border-t border-slate-800/50">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group/link hover:bg-blue-500/10 px-4 py-2 rounded-xl transition-all duration-300"
                  >
                    <span className="text-xs text-slate-400 group-hover/link:text-blue-400 font-mono transition-colors">
                      doi:{pub.doi}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover/link:text-blue-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
