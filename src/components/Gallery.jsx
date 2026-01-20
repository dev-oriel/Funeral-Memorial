import React, { useState, useEffect } from "react";

// --- HELPERS ---

// This dynamically generates the URLs for images 1.jpeg through 21.jpeg
// The path '../assets/' assumes this component is in 'src/components/'
// and images are in 'src/assets/'
const imageList = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  return {
    id: id,
    // explicitly using new URL with import.meta.url ensures Vite bundles these assets correctly
    src: new URL(`../assets/${id}.jpeg`, import.meta.url).href,
  };
});

// --- COMPONENTS ---

const GalleryItem = ({ src, alt, isActive }) => {
  // Base classes for transition speed and positioning
  // Increased duration to 1000ms for a smoother, slower "breathing" effect
  const baseClasses =
    "absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out";

  // Logic:
  // 1. Default state is 'grayscale'.
  // 2. If 'isActive' is true, remove grayscale and add slight zoom (scale-105).
  // 3. On hover, always remove grayscale and zoom more (scale-110) so user interaction still feels distinct.
  const dynamicClasses = isActive
    ? "grayscale-0 scale-105 group-hover:scale-110"
    : "grayscale group-hover:grayscale-0 group-hover:scale-110";

  return (
    // Added z-index handling so the currently active or hovered item sits slightly above others during zoom
    <div className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 cursor-pointer shadow-sm border border-primary/10 z-0 hover:z-10 transition-all">
      <div
        className={`${baseClasses} ${dynamicClasses}`}
        style={{ backgroundImage: `url("${src}")` }}
        role="img"
        aria-label={alt}
      ></div>
    </div>
  );
};

const Gallery = () => {
  // State to track which image index is currently "active" (colored)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to change the active index every 2.5 seconds (2500ms)
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        // Increment index, and use modulo (%) to loop back to 0 after the last image
        return (current + 1) % imageList.length;
      });
    }, 2500);

    // Cleanup the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      // NOTE: I corrected max-w-300 back to max-w-[1200px] so it fits the screen properly
      className="py-16 md:py-24 px-4 md:px-6 max-w-[1200px] mx-auto"
      id="gallery"
    >
      <div className="text-center mb-12">
        <h2 className="serif-text text-3xl md:text-4xl font-bold mb-4">
          Cherished Memories
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full opacity-60"></div>
      </div>

      {/* Responsive Grid: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {imageList.map((photo, index) => (
          <GalleryItem
            key={photo.id}
            src={photo.src}
            alt={`Memory of Zakayo ${photo.id}`}
            // Pass true if the current item's index matches the active state index
            isActive={index === activeIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
