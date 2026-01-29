import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import type { GalleryImage } from "@/types";

import heroFarm from "@/assets/hero-farm.jpg";
import galleryCows from "@/assets/gallery-cows.jpg";
import galleryProduction from "@/assets/gallery-production.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";
import galleryCare from "@/assets/gallery-care.jpg";
import productMilk from "@/assets/product-milk.jpg";
import productGhee from "@/assets/product-ghee.jpg";

const allImages: GalleryImage[] = [
  {
    id: "1",
    src: heroFarm,
    alt: "Cows grazing in green pastures at sunrise",
    category: "Farm",
  },
  {
    id: "2",
    src: galleryCows,
    alt: "Happy cows in our modern barn",
    category: "Cows",
  },
  {
    id: "3",
    src: galleryProduction,
    alt: "Modern dairy production facility",
    category: "Production",
  },
  {
    id: "4",
    src: galleryNature,
    alt: "Beautiful sunrise over the farm",
    category: "Nature",
  },
  {
    id: "5",
    src: galleryCare,
    alt: "Farmer caring for a calf",
    category: "Cows",
  },
  {
    id: "6",
    src: productMilk,
    alt: "Fresh milk in traditional bottle",
    category: "Products",
  },
  {
    id: "7",
    src: productGhee,
    alt: "Pure golden ghee",
    category: "Products",
  },
];

const categories = ["All", "Farm", "Cows", "Production", "Nature", "Products"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((image) => image.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-soft">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Gallery
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              A Glimpse of Our Farm
            </h1>
            <p className="body-lg text-muted-foreground">
              Take a visual journey through Vizhi Dairy Farm. From our lush pastures 
              to our modern facilities, see where your dairy products come from.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <GalleryGrid images={filteredImages} />

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Visit CTA */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-16 text-center">
            <h2 className="heading-lg text-primary-foreground mb-6">
              Want to Visit Our Farm?
            </h2>
            <p className="body-lg text-primary-foreground/85 max-w-2xl mx-auto mb-8">
              We welcome visitors who want to see our farm and learn about sustainable 
              dairy farming. Schedule a farm tour and meet our happy cows!
            </p>
            <a
              href="/contact"
              className="btn-hero inline-flex items-center gap-2 bg-accent hover:bg-gold-light"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
