import React from "react";
import { SPECIFICATIONS } from "../data";

interface BottomCardsProps {
  activeWidget: string;
  onCardClick: (id: string) => void;
}

export default function BottomCards({ activeWidget, onCardClick }: BottomCardsProps) {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8" id="interactive-hero-cards">
      <div className="bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(17,100,70,0.12),0_1px_3px_rgba(0,0,0,0.05)] border border-zinc-200/80 overflow-hidden">
        
        {/* Content Section using an integrated divided grid layout inside the unified shell */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-100">
          {SPECIFICATIONS.map((spec) => {
            return (
              <div
                key={spec.id}
                onClick={() => onCardClick(spec.id)}
                className="p-6 md:p-8 flex flex-col justify-between cursor-pointer bg-white hover:bg-zinc-50/40 transition-all duration-300 relative group h-full"
                id={`card-${spec.id}`}
              >
                {/* Visual accent top line showing the active state in a delicate full-width strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-izee-red transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center opacity-0 group-hover:opacity-100" />

                {/* Card Main content */}
                <div className="space-y-4">
                  <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-excon font-extrabold tracking-wide bg-izee-red text-white shadow-[0_4px_12px_rgba(17,100,70,0.15)] transition-all duration-300 group-hover:bg-izee-red-hover">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    <span className="text-[14px] font-normal">{spec.category}</span>
                  </span>
                  <h4 className="font-excon font-medium text-lg sm:text-xl text-izee-black leading-tight tracking-tight">
                    {spec.title}
                  </h4>
                  <p className="text-black text-xs leading-relaxed font-ranade font-medium">
                    {spec.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
