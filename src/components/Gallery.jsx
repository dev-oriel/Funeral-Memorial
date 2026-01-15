import React from "react";

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

const GalleryItem = ({ src, alt }) => (
  <div className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 cursor-pointer shadow-sm border border-primary/10">
    {/* Image with hover effects: Starts grayscale, becomes colored and zooms slightly on hover */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110"
      style={{ backgroundImage: `url("${src}")` }}
      role="img"
      aria-label={alt}
    ></div>
  </div>
);

const Gallery = () => {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-6 max-w-300 mx-auto"
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
        {imageList.map((photo) => (
          <GalleryItem
            key={photo.id}
            src={photo.src}
            alt={`Memory of Zakayo ${photo.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
