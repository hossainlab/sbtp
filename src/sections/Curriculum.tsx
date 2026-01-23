import React from 'react';
import { Clock, Calendar, ExternalLink } from 'lucide-react';
import { MODULES } from '../constants';

const Curriculum: React.FC = () => {
  return (
    <section id="curriculum" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-28">
            <h2 className="text-4xl font-bold mb-6 leading-tight text-white">General Training: <span className="text-blue-400">16-Module</span> Roadmap</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              <strong className="text-blue-400">Essential Technical Foundation</strong> - From NGS technology to advanced AI applications and scientific writing.
              Master core bioinformatics skills that you'll apply to your chosen specialization later.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-blue-400">Note:</strong> These modules contain <strong>no specialization topics</strong>. They provide the general technical expertise essential for all bioinformatics work.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 glass px-4 py-3 rounded-xl border border-white/5">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-slate-200">2 PM - 4 PM (BST) Sessions</span>
              </div>
              <div className="flex items-center space-x-3 glass px-4 py-3 rounded-xl border border-white/5">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-slate-200">16 Days Duration</span>
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/1CwdcexrqZdmNtpH3OvUAutPdkxReMklIdLf81s34lJY/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 glass px-6 py-4 rounded-xl border-2 border-blue-500/30 hover:border-blue-500 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all group"
              >
                <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="text-sm font-bold text-blue-400 group-hover:text-blue-300">View Detailed Curriculum</span>
              </a>
            </div>
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
            {MODULES.map((mod) => (
              <div key={mod.id} className="group glass p-5 rounded-2xl flex items-start space-x-4 border-slate-800 hover:border-blue-500/40 transition-all hover:bg-slate-900/40">
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-400 font-bold text-sm">
                  {mod.id}
                </div>
                <h4 className="text-sm font-semibold leading-tight pt-1 text-slate-200">{mod.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
