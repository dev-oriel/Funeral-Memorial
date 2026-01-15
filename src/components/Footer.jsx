import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark py-12 text-center border-t border-primary/20 mt-12">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-primary mb-6">
          <span className="material-symbols-outlined text-5xl">
            nature_people
          </span>
        </div>
        <h3 className="serif-text text-2xl font-bold mb-4 italic">
          Rest in Eternal Peace
        </h3>
        <p className="text-warm-gray/60 dark:text-gray-400 leading-relaxed mb-8">
          "Well done, good and faithful servant; you have been faithful over a
          few things, I will make you ruler over many things. Enter into the joy
          of your lord."
        </p>
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">
          Zakayo Kimutai Koskei
        </div>
        <div className="text-xs text-warm-gray/40 mt-2">1945 — 2026</div>
        <p className="text-[10px] text-warm-gray/20 mt-8">
          © 2026 The Koskei Family
        </p>
      </div>
    </footer>
  );
};

export default Footer;
