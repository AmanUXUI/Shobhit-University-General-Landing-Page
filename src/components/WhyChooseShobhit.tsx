import React from "react";
import { 
  Briefcase, 
  Globe, 
  Cpu, 
  GraduationCap, 
  Award, 
  Target, 
  Lightbulb, 
  Rocket, 
  Sparkles 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClasses: string;
  key?: React.Key;
}

function FeatureCard({ icon, title, description, colorClasses }: FeatureCardProps) {
  return (
    <div className="group relative bg-white border border-zinc-200/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,122,85,0.08)] hover:border-emerald-600/30 overflow-hidden">
      {/* Decorative hover gradient glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top green accent strip shown on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-600 to-[#007a55] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="flex flex-col gap-4">
        {/* Icon Container with dynamic colorful defaults */}
        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${colorClasses}`}>
          {icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="font-excon font-bold text-zinc-950 text-base md:text-lg tracking-tight group-hover:text-[#007a55] transition-colors duration-300">
            {title}
          </h3>
          <p className="font-ranade font-light text-zinc-500 text-sm mt-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseShobhit() {
  const features = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Industry-Integrated Curriculum",
      description: "Co-designed with elite corporate advisors to match current market trends and ensure deep professional relevance.",
      colorClasses: "bg-blue-50 border-blue-200/60 text-blue-600 group-hover:bg-blue-100/80 group-hover:text-blue-700"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Certification Opportunities",
      description: "Incorporate specialized modules in partnership with elite tech giants and premium credential providers.",
      colorClasses: "bg-indigo-50 border-indigo-200/60 text-indigo-600 group-hover:bg-indigo-100/80 group-hover:text-indigo-700"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Technology-Driven Learning",
      description: "Hands-on engineering in advanced workspaces, digital cloud platforms, and smart simulated labs.",
      colorClasses: "bg-amber-50 border-amber-200/60 text-amber-600 group-hover:bg-amber-100/80 group-hover:text-amber-700"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Expert Mentorship",
      description: "Personalized direction under distinguished research scholars, tech veterans, and active executives.",
      colorClasses: "bg-emerald-50 border-emerald-200/60 text-emerald-600 group-hover:bg-emerald-100/80 group-hover:text-emerald-700"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Practical Skill Development",
      description: "Emphasis on real-world case simulations, code sprints, collaborative bootcamps, and live projects.",
      colorClasses: "bg-rose-50 border-rose-200/60 text-rose-600 group-hover:bg-rose-100/80 group-hover:text-rose-700"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Placement-Oriented Training",
      description: "Rigorous corporate preparation with customized mock interviews, resume workshops, and soft skills.",
      colorClasses: "bg-purple-50 border-purple-200/60 text-purple-600 group-hover:bg-purple-100/80 group-hover:text-purple-700"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Experiential Learning",
      description: "Immersive learning loops comprising dynamic corporate internships, masterclasses, and field explorations.",
      colorClasses: "bg-yellow-50 border-yellow-200/60 text-yellow-600 group-hover:bg-yellow-100/80 group-hover:text-yellow-700"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Career Advancement Support",
      description: "Dedicated assistance including lifetime global alumni network access and dedicated industry connect drives.",
      colorClasses: "bg-sky-50 border-sky-200/60 text-sky-600 group-hover:bg-sky-100/80 group-hover:text-sky-700"
    }
  ];

  return (
    <section id="why-choose-shobhit" className="py-20 bg-zinc-50 border-t border-zinc-200/60 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-emerald-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-zinc-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
              The Shobhit Advantage
            </span>
          </div>
          <h2 className="font-excon font-normal text-3xl sm:text-4xl text-zinc-950 tracking-tight">
            Why Choose Shobhit University?
          </h2>
          <p className="font-ranade font-light text-zinc-550 text-sm sm:text-base mt-3 leading-relaxed">
            Discover a transformative educational ecosystem designed to sculpt industry-ready professionals, global innovators, and visionary leaders.
          </p>
        </div>

        {/* Features Bento/Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard 
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClasses={feature.colorClasses}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
