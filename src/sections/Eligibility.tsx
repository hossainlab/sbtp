import React from 'react';
import { Users, Laptop, Terminal, Target, CheckCircle2 } from 'lucide-react';

const Eligibility: React.FC = () => {
  return (
    <section id="eligibility" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Who Can Join */}
          <div className="glass p-10 rounded-[2.5rem] border-slate-800 bg-slate-950/40">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-white">Who Can Join?</h3>
            <ul className="space-y-4">
              {[
                "B.Sc. Honors or Master's students in Bio-sciences, CS, Math, or Public Health",
                "Strong motivation for M.Sc. / PhD studies in Computational Biology",
                "Completed or currently enrolled in DeepBio/CHIRAL BIG programs",
                "Available for 15–20 hours/week for lab work",
                "Team-oriented with problem-solving mindset",
                "Commitment for 12–18 months for research completion"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="glass p-10 rounded-[2.5rem] border-slate-800 bg-slate-950/40">
            <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Laptop className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-white">Technological Requirements</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold text-slate-100 mb-3 flex items-center">
                  <Terminal className="w-4 h-4 mr-2 text-purple-400" />
                  Hardware
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  PC or Laptop with at least 8–16 GB RAM (SSD storage preferred).
                  Stable high-speed internet for cloud-based tools (Google Colab, HPC).
                </p>
              </div>
              <div className="p-5 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <p className="text-xs font-medium text-yellow-200 leading-relaxed">
                    <strong className="block text-yellow-500 uppercase tracking-widest mb-1 font-black">Exclusive Policy</strong>
                    During project period, students are not allowed to engage with other research groups (except university thesis). Voluntary position for serious experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
