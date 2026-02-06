// src/pages/Gallery.tsx
import type { GalleryImage } from "@/types";

// Your existing gallery images
import image1 from "@/assets/img1.jpeg";
import image2 from "@/assets/img2.jpeg";
import image3 from "@/assets/img3.jpeg";
import image4 from "@/assets/img4.jpeg";
import image5 from "@/assets/img5.jpeg";
import image6 from "@/assets/img6.jpeg";

const galleryImages: GalleryImage[] = [
  { id: "1", src: image1, alt: "Vizhis Dairy Farm - View 1" },
  { id: "2", src: image2, alt: "Vizhis Dairy Farm - View 2" },
  { id: "3", src: image3, alt: "Vizhis Dairy Farm - View 3" },
  { id: "4", src: image4, alt: "Vizhis Dairy Farm - View 4" },
  { id: "5", src: image5, alt: "Vizhis Dairy Farm - View 5" },
  { id: "6", src: image6, alt: "Vizhis Dairy Farm - View 6" },
];

const Gallery = () => {
  return (
    <>
      {/* Hero with cow background - same as your previous favorite version */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={image6} // ← using image6 as the hero cow/farm background (same as before)
            alt="Vizhis Dairy Farm Hero - Cows and Farm"
            className="w-full h-full object-cover brightness-[0.65] scale-105 transition-transform duration-[20s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/40 to-transparent" />
        </div>

        {/* Hero Content */}
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

      {/* Clean Gallery Grid (no filters) */}
      <section className="py-16 md:py-24 bg-emerald-50/40">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 bg-white border border-emerald-200/60"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Subtle overlay caption on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-white text-sm font-medium drop-shadow-md">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 text-muted-foreground">
            <p className="text-lg">
              More glimpses of purity and care coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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