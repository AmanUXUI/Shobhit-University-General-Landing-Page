import React from "react";
import { Sparkles, MapPin } from "lucide-react";

interface LifeImageItem {
  url: string;
  category: string;
  title: string;
}

const LIFE_IMAGES: LifeImageItem[] = [
  {
    url: "https://live.staticflickr.com/65535/55088381215_7fda0bbbcf_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 7"
  },
  {
    url: "https://live.staticflickr.com/65535/55130314438_972f0b4940_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 3"
  },
  {
    url: "https://live.staticflickr.com/65535/54916199971_dd90967cb6_b.jpg",
    category: "CAMPUS",
    title: "Campus Life 10"
  },
  {
    url: "https://live.staticflickr.com/65535/55131689413_23d96ff7cd_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 1"
  },
  {
    url: "https://live.staticflickr.com/65535/55088276929_99b4f7007d_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 8"
  },
  {
    url: "https://live.staticflickr.com/65535/55130198598_6eda331857_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 4"
  },
  {
    url: "https://live.staticflickr.com/65535/55088265354_e5b4b63ea7_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 11"
  },
  {
    url: "https://live.staticflickr.com/65535/55130316428_2be1f68799_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 2"
  },
  {
    url: "https://live.staticflickr.com/65535/55082598058_5f404aabb0_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 9"
  },
  {
    url: "https://live.staticflickr.com/65535/55130249074_e48d28116e_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 5"
  },
  {
    url: "https://live.staticflickr.com/65535/55088015856_e25b5e4730_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 12"
  },
  {
    url: "https://live.staticflickr.com/65535/55100740375_3990d3a4ec_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 6"
  }
];

export default function LifeAtShobhit() {
  // Triple the array to guarantee seamless looping across any extra-wide screen sizes
  const combinedImages = [...LIFE_IMAGES, ...LIFE_IMAGES, ...LIFE_IMAGES];

  return (
    <section id="life-at-shobhit" className="py-24 bg-white text-zinc-950 relative overflow-hidden border-t border-zinc-100">
      {/* Self-contained CSS for seamless horizontal marquee */}
      <style>{`
        @keyframes scroll-life-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33333%); }
        }

        .animate-scroll-life {
          animation: scroll-life-rtl 45s linear infinite;
        }

        .pause-life-marquee:hover .animate-scroll-life {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Soft Accents */}
      <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-[#007a55]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14 text-center">
        {/* Header content precisely following prompt labels */}
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-4 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
              Student Experiences
            </span>
          </div>

          <h2 className="font-excon font-normal text-2xl sm:text-[28px] text-zinc-900 tracking-tight leading-tight">
            Life @ Shobhit University
          </h2>

          <p className="font-ranade font-light text-zinc-500 text-sm sm:text-[15px] mt-4 leading-relaxed">
            A campus where academics, creativity, sports, and student experiences come together to create an enriching and memorable university journey.
          </p>
        </div>
      </div>

      {/* Full-width carousel scroll track */}
      <div className="relative w-full overflow-hidden select-none py-2 pause-life-marquee">
        {/* Soft edge blur overlays to blend in and out seamlessly */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling rail */}
        <div className="flex w-[300%] items-center gap-6 animate-scroll-life">
          {combinedImages.map((item, index) => (
            <div
              key={`life-img-${index}`}
              className="group shrink-0 relative aspect-square w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-zinc-150 transition-all duration-500"
            >
              {/* Image itself */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
