import React from 'react';
import { Linkedin } from 'lucide-react';
import { INSTRUCTORS } from '../constants';

const InstructorSection: React.FC = () => {
  return (
    <section id="mentors" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-4 text-white tracking-tight">Our <span className="text-blue-400">Team</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Bioinformatics researchers at DeepBio, Big Bioinformatics Lab and CHIRAL.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {INSTRUCTORS.map((instructor) => (
            <div
              key={instructor.id}
              className="glass bg-slate-900/40 p-10 rounded-2xl border-white/5 transition-all duration-300 group flex flex-col items-center text-center shadow-2xl hover:bg-slate-900/60"
            >
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-blue-500/50 to-purple-500/50">
                   <div className="w-full h-full rounded-full border-4 border-slate-900 overflow-hidden shadow-2xl">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-2 text-white">{instructor.name}</h3>
              <p className="text-blue-400 text-sm font-semibold mb-6 max-w-[280px] leading-relaxed">
                {instructor.role}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 px-2 min-h-[80px]">
                {instructor.bio}
              </p>

              {/* Social Icon */}
              <div className="mt-auto pt-6 w-full flex justify-center border-t border-white/5">
                {instructor.linkedin && (
                  <a
                    href={instructor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-500 transition-colors p-2"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
