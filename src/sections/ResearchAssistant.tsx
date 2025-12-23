import React from 'react';
import { Briefcase, AlertTriangle, CheckCircle2, Clock, Users2, GraduationCap, Heart, Shield, UserPlus } from 'lucide-react';

const ResearchAssistant: React.FC = () => {
  return (
    <section id="research-assistant" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Briefcase className="w-3 h-3" />
            <span>Research Assistant Opportunity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Join as <span className="text-purple-400">Research Assistant</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Research Assistant recruitment follows the successful completion of the course and assigned projects.
          </p>
        </div>

        {/* Important Alert Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass p-8 rounded-3xl border-2 border-red-500/30 bg-red-500/5">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Important Notice</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Failure to meet any of the requirements below will result in <strong className="text-white">immediate termination</strong> from the Research Assistant position. Please review carefully before applying.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Requirement 1 */}
          <div className="glass p-6 rounded-2xl border-slate-800 hover:border-purple-500/50 transition-all duration-300 bg-slate-950/60">
            <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 border border-purple-500/30">
              <GraduationCap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Academic Requirements</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Strong motivation for research</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Clear plans for future MSc/PhD studies in computational biology or bioinformatics</span>
              </li>
            </ul>
          </div>

          {/* Requirement 2 */}
          <div className="glass p-6 rounded-2xl border-slate-800 hover:border-purple-500/50 transition-all duration-300 bg-slate-950/60">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
              <UserPlus className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Program Enrollment</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Currently enrolled in or have completed the SBTP training program</span>
              </li>
            </ul>
          </div>

          {/* Requirement 3 */}
          <div className="glass p-6 rounded-2xl border-slate-800 hover:border-purple-500/50 transition-all duration-300 bg-slate-950/60">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center mb-4 border border-cyan-500/30">
              <Clock className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Time Commitment</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>15–20 hours per week</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Preferably evenings or weekends</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Flexible during exam periods</span>
              </li>
            </ul>
          </div>

          {/* Requirement 4 */}
          <div className="glass p-6 rounded-2xl border-slate-800 hover:border-purple-500/50 transition-all duration-300 bg-slate-950/60">
            <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mb-4 border border-green-500/30">
              <Heart className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Personal Qualities</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Team-oriented mindset</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Dedicated and passionate about data-driven biological research</span>
              </li>
            </ul>
          </div>

          {/* Requirement 5 */}
          <div className="glass p-6 rounded-2xl border-slate-800 hover:border-purple-500/50 transition-all duration-300 bg-slate-950/60">
            <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center mb-4 border border-amber-500/30">
              <Users2 className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Weekly Meetings</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Attend weekly online meetings every Sunday</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Time: 9:00–11:00 PM (BST)</span>
              </li>
            </ul>
          </div>

          {/* Requirement 6 */}
          <div className="glass p-6 rounded-2xl border-slate-800 hover:border-purple-500/50 transition-all duration-300 bg-slate-950/60">
            <div className="w-12 h-12 bg-rose-600/20 rounded-xl flex items-center justify-center mb-4 border border-rose-500/30">
              <Shield className="w-6 h-6 text-rose-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Ethics & Commitment</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Uphold research ethics at all times</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Maintain 12–18 month commitment to complete assigned projects</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Willing to mentor or assist junior researchers during collaborative lab activities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAssistant;
