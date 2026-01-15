import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Biography", "Program", "Hymns", "Tributes"];

  return (
    <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 px-6 lg:px-40 py-4">
      <div className="max-w-300 mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">church</span>
          </div>
          <h2 className="text-warm-gray dark:text-white text-lg font-bold tracking-tight uppercase">
            Zakayo K. Koskei
          </h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="hidden md:block bg-primary text-white text-xs font-bold py-2 px-5 rounded-lg hover:bg-primary/90 transition-all uppercase tracking-widest">
          Share Condolences
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden pt-4 pb-4 border-t border-primary/10 mt-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a
              key={item}
              onClick={() => setIsOpen(false)}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium block"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
