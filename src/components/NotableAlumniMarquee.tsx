import React from "react";
import { GraduationCap, ArrowRight } from "lucide-react";

const ALUMNI_PICTURES = [
  "https://i.postimg.cc/65Tfd4nL/BG-(10).png",
  "https://i.postimg.cc/dtXmnQ9s/BG-(5).png",
  "https://i.postimg.cc/7PKNGnGy/BG-(6).png",
  "https://i.postimg.cc/9FzYGwZZ/BG-(7).png",
  "https://i.postimg.cc/ZK0xrvpP/BG-(8).png",
  "https://i.postimg.cc/RVqLcJK7/BG-(9).png"
];

export default function NotableAlumniMarquee() {
  // Duplicate images several times for seamless, high-density continuous looping across larger viewports
  const combinedPictures = [
    ...ALUMNI_PICTURES,
    ...ALUMNI_PICTURES,
    ...ALUMNI_PICTURES,
    ...ALUMNI_PICTURES
  ];

  return (
    <section id="notable-alumni" className="py-24 bg-[#050B14] text-white relative overflow-hidden border-t border-zinc-900/60">
      {/* Seamless left-to-right CSS animation specifically crafted for portrait cards */}
      <style>{`
        @keyframes scroll-alumni-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }

        .animate-scroll-alumni {
          animation: scroll-alumni-rtl 40s linear infinite;
        }

        .pause-alumni-marquee:hover .animate-scroll-alumni {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative Blur Background Accents */}
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[-10%] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid subtle overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Minimalist Title Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-full w-fit mb-4 select-none">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
                global achievements
              </span>
            </div>

            <h2 className="font-excon font-normal text-2xl sm:text-[24px] text-white tracking-tight leading-[24px]">
              Notable Alumni
            </h2>

            <p className="font-ranade font-light text-zinc-400 text-sm sm:text-[15px] mt-4 leading-relaxed">
              Discover the inspiring journeys of our distinguished alumni who are driving innovation, leading global organisations, creating entrepreneurial ventures, and making a meaningful impact across industries, academia, public service, and society.
            </p>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer text-zinc-400 hover:text-white transition-colors duration-300">
            <span className="font-excon font-bold text-xs tracking-wider uppercase">
              Join the Legacy Network
            </span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>

        {/* Highlighted Seamless Infinite Marquee Slider Layout */}
        <div className="relative w-full rounded-3xl overflow-hidden select-none bg-gradient-to-b from-white/[0.02] to-transparent p-1.5 border border-white/10 pause-alumni-marquee">
          
          {/* Subtle Left and Right Vignette Fade Layers */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#050B14] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#050B14] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track Container */}
          <div className="w-full overflow-hidden relative">
            <div className="flex w-[300%] items-center gap-6 sm:gap-8 animate-scroll-alumni py-2.5">
              {combinedPictures.map((imageSrc, index) => (
                <div 
                  key={`alumni-card-${index}`} 
                  className="flex-shrink-0 relative h-[360px] sm:h-[420px] w-[260px] sm:w-[310px] rounded-2xl overflow-hidden shadow-2xl bg-[#0a1122] border border-white/5 transform hover:scale-[1.03] transition-all duration-350 hover:border-emerald-500/20 active:scale-95"
                >
                  <img
                    src={imageSrc}
                    alt={`Notable alumnus card ${index + 1}`}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Sheen effect reflection on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent origin-left opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
