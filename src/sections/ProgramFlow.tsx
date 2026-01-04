import { useState } from 'react';
import { BookOpen, ClipboardCheck, Award, Target, Rocket, GraduationCap, Calendar, ChevronRight, ChevronLeft, Check } from 'lucide-react';

const ProgramFlow = () => {
  const [activeStep, setActiveStep] = useState(1);

  const flowSteps = [
    {
      id: 1,
      title: "General Training Begins",
      subtitle: "16-Module Technical Foundation",
      description: "Start your journey with comprehensive bioinformatics training covering essential skills needed for all specializations.",
      duration: "16 Days",
      timeline: "Day 1-16",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500",
      borderColor: "border-blue-500",
      textColor: "text-blue-400",
      details: [
        "NGS technology & sequencing fundamentals",
        "RNA-seq analysis (bulk & single-cell)",
        "Programming with R & Python",
        "AI/ML applications in life sciences",
        "Scientific writing & literature review"
      ],
      requirement: "No prior bioinformatics experience required"
    },
    {
      id: 2,
      title: "Continuous Assessment",
      subtitle: "Hands-on Assignments & Projects",
      description: "Apply your learning through practical assignments for each module, building a portfolio of bioinformatics work.",
      duration: "16 Days",
      timeline: "During Training",
      icon: ClipboardCheck,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500",
      borderColor: "border-purple-500",
      textColor: "text-purple-400",
      details: [
        "Module-specific coding assignments",
        "Real-world data analysis tasks",
        "Code quality & documentation review",
        "Peer collaboration exercises",
        "Progress tracking & feedback"
      ],
      requirement: "Minimum 70% completion rate expected"
    },
    {
      id: 3,
      title: "Performance Evaluation",
      subtitle: "Best Performer Selection",
      description: "Top performers based on assignment quality, consistency, and participation advance to specialized research projects.",
      duration: "2 Days",
      timeline: "Day 17-18",
      icon: Award,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500",
      borderColor: "border-amber-500",
      textColor: "text-amber-400",
      details: [
        "Assignment scores & completion rate",
        "Code quality & best practices",
        "Active participation in sessions",
        "Problem-solving approach",
        "Technical writing skills"
      ],
      requirement: "Top 30% of cohort qualify for specialization"
    },
    {
      id: 4,
      title: "Specialization Selection",
      subtitle: "Choose Your Research Track",
      description: "Select your specialization based on interest and career goals. Apply your technical foundation to domain-specific research.",
      duration: "3 Days",
      timeline: "Day 19-21",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500",
      borderColor: "border-green-500",
      textColor: "text-green-400",
      details: [
        "Cancer Biology & Genomics",
        "Neuroscience & Brain Research",
        "Infectious Disease & Epidemiology",
        "AgriBioinformatics & Plant Science",
        "One-on-one mentor consultation"
      ],
      requirement: "Must complete general training to proceed"
    },
    {
      id: 5,
      title: "Specialized Project Work",
      subtitle: "Real-World Research Experience",
      description: "Work on cutting-edge research projects in your chosen specialization under expert guidance, producing publication-ready results.",
      duration: "1.5 Months",
      timeline: "After Selection",
      icon: Rocket,
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-indigo-500",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-400",
      details: [
        "Domain-specific bioinformatics pipelines",
        "Advanced analysis techniques",
        "Research paper preparation",
        "Presentation & visualization",
        "Collaboration with research teams"
      ],
      requirement: "Weekly progress reviews with mentors"
    },
    {
      id: 6,
      title: "Program Completion",
      subtitle: "Certification & Research Assistant Opportunity",
      description: "Earn your certificate and top performers receive offers to continue as Research Assistants on ongoing projects.",
      duration: "Ongoing",
      timeline: "Post-Program",
      icon: GraduationCap,
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-500",
      borderColor: "border-rose-500",
      textColor: "text-rose-400",
      details: [
        "Official program completion certificate",
        "Portfolio of completed projects",
        "Research paper co-authorship opportunities",
        "Research Assistant positions (top performers)",
        "Professional network & alumni community"
      ],
      requirement: "Complete all project deliverables"
    }
  ];

  const currentStep = flowSteps.find(step => step.id === activeStep) || flowSteps[0];
  const CurrentIcon = currentStep.icon;

  const handlePrevious = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  const handleNext = () => {
    if (activeStep < flowSteps.length) setActiveStep(activeStep + 1);
  };

  return (
    <section id="program-flow" className="py-24 px-4 relative overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Complete Program Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            16 days of intensive general training followed by 1.5 months of specialized project work
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12">
          {/* Desktop: Horizontal Tabs */}
          <div className="hidden lg:flex items-center justify-center gap-3 flex-wrap">
            {flowSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = activeStep === step.id;
              const isPast = step.id < activeStep;

              return (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`group relative px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? `${step.borderColor} bg-gradient-to-br ${step.color} shadow-lg`
                        : isPast
                        ? 'border-green-500/50 bg-green-500/10 hover:border-green-500'
                        : 'border-white/10 glass hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isActive
                          ? 'bg-white/20'
                          : isPast
                          ? 'bg-green-500/20'
                          : 'bg-white/5'
                      }`}>
                        {isPast ? (
                          <Check className="w-5 h-5 text-green-400" />
                        ) : (
                          <StepIcon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                        )}
                      </div>
                      <div className="text-left">
                        <div className={`text-xs font-semibold ${isActive ? 'text-white' : isPast ? 'text-green-400' : 'text-gray-500'}`}>
                          STEP {step.id}
                        </div>
                        <div className={`text-sm font-bold ${isActive ? 'text-white' : isPast ? 'text-green-300' : 'text-gray-400'}`}>
                          {step.title.split(' ')[0]} {step.title.split(' ')[1]}
                        </div>
                      </div>
                    </div>
                  </button>
                  {index < flowSteps.length - 1 && (
                    <ChevronRight className={`w-5 h-5 mx-1 ${isPast ? 'text-green-500' : 'text-gray-600'}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical Tabs */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
            {flowSteps.map((step) => {
              const StepIcon = step.icon;
              const isActive = activeStep === step.id;
              const isPast = step.id < activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? `${step.borderColor} bg-gradient-to-br ${step.color} shadow-lg`
                      : isPast
                      ? 'border-green-500/50 bg-green-500/10'
                      : 'border-white/10 glass'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-white/20' : isPast ? 'bg-green-500/20' : 'bg-white/5'
                    }`}>
                      {isPast ? (
                        <Check className="w-6 h-6 text-green-400" />
                      ) : (
                        <StepIcon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      )}
                    </div>
                    <div className={`text-xs font-bold ${isActive ? 'text-white' : isPast ? 'text-green-400' : 'text-gray-500'}`}>
                      {step.id}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="glass rounded-3xl border-2 border-white/10 overflow-hidden bg-slate-900/60">
          {/* Header */}
          <div className={`p-8 md:p-10 bg-gradient-to-br ${currentStep.color} relative`}>
            <div className="absolute inset-0 bg-slate-950/40"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                  <CurrentIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white/80 mb-2">STEP {currentStep.id} OF {flowSteps.length}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{currentStep.title}</h3>
                  <p className="text-lg text-white/90 font-semibold">{currentStep.subtitle}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="px-5 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <div className="text-xs text-white/80 font-medium">Duration</div>
                  <div className="text-base font-bold text-white">{currentStep.duration}</div>
                </div>
                <div className="px-5 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <div className="text-xs text-white/80 font-medium">Timeline</div>
                  <div className="text-base font-bold text-white">{currentStep.timeline}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-10">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {currentStep.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What You'll Learn */}
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${currentStep.color}`}></div>
                  What You'll Learn
                </h4>
                <ul className="space-y-3">
                  {currentStep.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br ${currentStep.color} flex items-center justify-center mt-0.5`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${currentStep.color}`}></div>
                  Requirements
                </h4>
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${currentStep.color} bg-opacity-5 border-2 ${currentStep.borderColor} border-opacity-30`}>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {currentStep.requirement}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 p-5 glass rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span className="font-semibold">Overall Progress</span>
                    <span className="font-bold">{Math.round((currentStep.id / flowSteps.length) * 100)}%</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${currentStep.color} rounded-full transition-all duration-700`}
                      style={{ width: `${(currentStep.id / flowSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="p-6 md:p-8 border-t border-white/10 bg-slate-950/40">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={activeStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeStep === 1
                    ? 'opacity-30 cursor-not-allowed text-gray-500'
                    : 'glass border border-white/20 hover:border-blue-500/50 text-white hover:bg-blue-500/10'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Previous Step</span>
              </button>

              <div className="text-center">
                <div className="text-xs text-gray-500 font-medium">Step Navigation</div>
                <div className="text-sm font-bold text-white">{activeStep} / {flowSteps.length}</div>
              </div>

              <button
                onClick={handleNext}
                disabled={activeStep === flowSteps.length}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeStep === flowSteps.length
                    ? 'opacity-30 cursor-not-allowed text-gray-500'
                    : `bg-gradient-to-r ${currentStep.color} hover:shadow-lg hover:shadow-blue-500/50 text-white`
                }`}
              >
                <span className="hidden sm:inline">Next Step</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFlow;
