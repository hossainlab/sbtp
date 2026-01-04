import React from 'react';
import { Users } from 'lucide-react';
import { MANAGEMENT } from '../constants';

const ManagementSection: React.FC = () => {
  return (
    <section id="management" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Users className="w-3 h-3" />
            <span>Management Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Our <span className="text-emerald-400">Management Team</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Dedicated professionals ensuring smooth operations and exceptional program delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {MANAGEMENT.map((member) => (
            <div
              key={member.id}
              className="group glass rounded-3xl overflow-hidden border-slate-800 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 bg-slate-950/60"
            >
              {/* Image */}
              <div className="relative w-full h-80 overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

              {/* Info */}
              <div className="p-6 bg-slate-950/90">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-emerald-400 font-semibold mb-3">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
