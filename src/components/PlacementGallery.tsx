import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const PLACEMENT_IMAGES = [
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement3.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement4.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement5.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement6.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement7.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement8.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement9.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement10.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement11.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement12.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p01.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p02.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p03.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p04.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p7.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p8.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p9.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p10.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p11.webp"
];

// Duplicate list to achieve a completely seamless, infinite carousel effect
const DOUBLE_PLACEMENT_IMAGES = [...PLACEMENT_IMAGES, ...PLACEMENT_IMAGES];

export default function PlacementGallery() {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1.2); // partial peek on small screen
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerWidthPercent = (DOUBLE_PLACEMENT_IMAGES.length / visibleCount) * 100;

  return (
    <section id="our-placements-gallery" className="py-16 bg-zinc-50 border-t border-zinc-250/50 relative overflow-hidden">
      <style>{`
        @keyframes placementMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .placement-marquee-track {
          display: flex;
          animation: placementMarquee 80s linear infinite;
        }
        .placement-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative ambient background blur lights */}
      <div className="absolute left-1/3 top-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-72 h-72 bg-[#007a55]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
                Success Stories
              </span>
            </div>
            <h2 className="font-excon font-normal text-2xl sm:text-3xl md:text-4xl text-zinc-950 tracking-tight">
              Our Placements
            </h2>
            <p 
              style={{ lineHeight: "26px" }}
              className="font-ranade font-light text-zinc-550 text-sm mt-2 max-w-xl"
            >
              Celebrating outstanding corporate placements of our bright minds across premium international enterprises and pioneer domestic giants.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#007a55] font-ranade text-xs font-semibold uppercase tracking-wider group cursor-default">
            <span>Hover to pause & inspect</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      {/* Seamless horizontal sliding carousel container */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        
        {/* Soft left/right gradients to blend edges beautifully */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50 via-zinc-50/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50 via-zinc-50/60 to-transparent z-10 pointer-events-none" />

        <div 
          className="placement-marquee-track"
          style={{ width: `${containerWidthPercent}%` }}
        >
          {DOUBLE_PLACEMENT_IMAGES.map((imgUrl, idx) => (
            <div
              key={`placement-creative-${idx}`}
              style={{ width: `${100 / DOUBLE_PLACEMENT_IMAGES.length}%` }}
              className="px-3 shrink-0"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-[0_12px_30px_-8px_rgba(0,122,85,0.06),0_1px_3px_rgba(0,0,0,0.02)] border border-zinc-200/60 group">
                <img
                  src={imgUrl}
                  alt={`Shobhit University Placement Banner ${(idx % PLACEMENT_IMAGES.length) + 1}`}
                  className="w-full h-full object-cover transform scale-[1.005] group-hover:scale-105 transition-all duration-500 ease-out select-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Premium hover overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
