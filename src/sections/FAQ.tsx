import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <HelpCircle className="w-3 h-3" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about SBTP. Can't find the answer you're looking for? Contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="glass rounded-2xl border-slate-800 overflow-hidden transition-all duration-300 hover:border-blue-500/40"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-200 group"
              >
                <span className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 pb-6 pt-2">
                  <p className="text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <a
            href="mailto:deepbiobd@gmail.com"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-400 rounded-xl font-semibold transition-all"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
