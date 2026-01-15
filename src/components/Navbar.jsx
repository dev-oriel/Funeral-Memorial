import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Biography", "Program", "Hymns", "Tributes"];

  return (
    <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/10 px-4 md:px-10 lg:px-40 py-4 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl md:text-4xl">
                church
              </span>
            </div>
            <h2 className="text-warm-gray dark:text-white text-base md:text-lg font-bold tracking-tight uppercase leading-tight">
              Zakayo K. Koskei
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                {item}
              </a>
            ))}
            <button className="bg-primary text-white text-xs font-bold py-2.5 px-6 rounded-lg hover:bg-primary/90 hover:shadow-md transition-all uppercase tracking-widest cursor-pointer">
              Condolences
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary p-2 active:scale-95 transition-transform cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-6 mt-2 border-t border-primary/10 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((item) => (
              <a
                key={item}
                onClick={() => setIsOpen(false)}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium py-3 px-2 hover:bg-primary/5 hover:text-primary rounded-md transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-primary text-white text-sm font-bold py-3 rounded-lg mt-2 w-full uppercase tracking-widest shadow-sm">
              Share Condolences
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
