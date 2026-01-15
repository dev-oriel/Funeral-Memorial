import React from "react";

const Hero = () => {
  return (
    <section className="pt-8 pb-16 md:py-24 px-4 md:px-6">
      <div className="relative overflow-hidden rounded-2xl bg-primary/5 min-h-125 md:min-h-150 flex flex-col items-center justify-center p-6 md:p-12 text-center border border-primary/10 max-w-300 mx-auto shadow-sm">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center grayscale"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2574&auto=format&fit=crop")',
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-primary font-serif italic text-lg md:text-2xl mb-4 animate-fade-in">
            In Loving Memory
          </span>

          <h1 className="serif-text text-3xl md:text-5xl lg:text-6xl font-bold text-warm-gray dark:text-white leading-tight mb-6 drop-shadow-sm">
            Celebrating the Life of <br className="hidden md:block" />
            <span className="text-primary/90">Zakayo Kimutai Koskei</span>
          </h1>

          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-white/50 dark:bg-black/20 rounded-full border border-primary/10 backdrop-blur-sm">
            <span className="text-sm md:text-lg font-bold text-warm-gray dark:text-gray-200 uppercase tracking-widest">
              1945 — 2026
            </span>
          </div>

          <div className="serif-text italic text-warm-gray/70 dark:text-gray-300 text-sm md:text-lg leading-relaxed mb-10 border-y border-primary/20 py-6 max-w-2xl">
            "The LORD is my rock, my fortress, and my deliverer; my God, my
            rock, in whom I take refuge..."
            <br />
            <span className="font-bold text-primary not-italic text-xs md:text-sm mt-3 block uppercase tracking-widest font-display">
              — Psalm 18:2
            </span>
          </div>

          <a
            href="#program"
            className="group inline-flex items-center gap-2 bg-primary text-white text-sm md:text-base px-8 py-3.5 rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            View Funeral Program
            <span className="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">
              arrow_downward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
