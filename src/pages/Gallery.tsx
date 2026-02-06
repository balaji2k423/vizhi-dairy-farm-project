// src/pages/Gallery.tsx
import { useState } from "react";
import type { GalleryImage } from "@/types";

// Your images (keep your existing imports)
import image1 from "@/assets/img1.jpeg";
import image2 from "@/assets/img2.jpeg";
import image3 from "@/assets/img3.jpeg";
import image4 from "@/assets/img4.jpeg";
import image5 from "@/assets/img5.jpeg";
import image6 from "@/assets/img6.jpeg";

const allImages: GalleryImage[] = [
  { id: "1", src: image1, alt: "Vizhis Dairy Farm - Image 1", category: "Farm" },
  { id: "2", src: image2, alt: "Vizhis Dairy Farm - Image 2", category: "Farm" },
  { id: "3", src: image3, alt: "Vizhis Dairy Farm - Image 3", category: "Farm" },
  { id: "4", src: image4, alt: "Vizhis Dairy Farm - Image 4", category: "Farm" },
  { id: "5", src: image5, alt: "Vizhis Dairy Farm - Image 5", category: "Farm" },
  { id: "6", src: image6, alt: "Vizhis Dairy Farm - Image 6", category: "Farm" },
];

const categories = ["All", "Farm", "Cows", "Facility", "Products"]; // you can expand later

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Premium Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={image6} // using one of your images as hero background
            alt="Vizhis Dairy Farm Hero"
            className="w-full h-full object-cover brightness-[0.65] scale-105 transition-transform duration-[20s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest text-emerald-200 uppercase bg-emerald-900/40 backdrop-blur-sm rounded-full border border-emerald-700/30">
            Gallery
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            Essence of Purity
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
            Where tradition meets cutting-edge hygiene — a visual journey through our automated dairy farm.
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container-custom">
          {/* Category Filters – premium pill style */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300
                  border backdrop-blur-sm
                  ${
                    activeCategory === cat
                      ? "bg-emerald-700 text-white border-emerald-700 shadow-lg shadow-emerald-700/20"
                      : "bg-white/70 text-emerald-800 border-emerald-200/70 hover:bg-emerald-50 hover:border-emerald-400 hover:shadow-md"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid – masonry style with hover effects */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 md:gap-6 space-y-5 md:space-y-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group break-inside-avoid relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-sm font-medium drop-shadow-md">
                      {image.alt}
                    </p>
                    <p className="text-emerald-200/80 text-xs mt-1">
                      Vizhis Dairy Farm
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl text-emerald-700/70 font-medium">
                No images found in this category yet.
              </p>
              <p className="text-muted-foreground mt-3">
                New captures are added regularly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-800 to-teal-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Experience the Purity Yourself
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
            See our fully automated, zero-human-touch facility in person.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Farm Visit
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;