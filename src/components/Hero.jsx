import React from "react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="relative overflow-hidden rounded-xl bg-primary/5 min-h-137.5 flex flex-col items-center justify-center p-8 text-center border border-primary/10 max-w-300 mx-auto">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center grayscale"
          // Note: Replace this URL with the actual photo of Mr. Zakayo
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2574&auto=format&fit=crop")',
          }}
        ></div>

        <div className="relative z-10 max-w-3xl">
          <span className="text-primary font-serif italic text-xl mb-4 block">
            In Loving Memory
          </span>

          <h1 className="serif-text text-4xl md:text-6xl font-bold text-warm-gray dark:text-white leading-tight mb-6">
            Celebrating the Life of <br /> Zakayo Kimutai Koskei
          </h1>

          <p className="text-lg md:text-xl font-medium text-warm-gray/70 dark:text-gray-400 mb-8 uppercase tracking-widest">
            Sunrise: 1945 — Sunset: Jan 5, 2026
          </p>

          <div className="serif-text italic text-warm-gray/60 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-10 border-y border-primary/20 py-6 mx-auto max-w-2xl">
            "The LORD is my rock, my fortress, and my deliverer; my God, my
            rock, in whom I take refuge, my shield, and the horn of my
            salvation, my stronghold."
            <br />
            <span className="font-bold text-primary not-italic text-xs mt-2 block uppercase tracking-widest">
              — Psalm 18:2
            </span>
          </div>

          <a
            href="#program"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
          >
            View Funeral Program{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_downward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
