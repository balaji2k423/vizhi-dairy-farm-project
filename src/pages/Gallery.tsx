import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import type { GalleryImage } from "@/types";

// Import your 6 custom images from assets folder
// Replace these with your actual image filenames
import image1 from "@/assets/img1.jpeg";
import image2 from "@/assets/img2.jpeg";
import image3 from "@/assets/img3.jpeg";
import image4 from "@/assets/img4.jpeg";
import image5 from "@/assets/img5.jpeg";
import image6 from "@/assets/img6.jpeg";

const allImages: GalleryImage[] = [
  {
    id: "1",
    src: image1,
    alt: "Vizhis Dairy Farm - Image 1",
    category: "Farm",
  },
  {
    id: "2",
    src: image2,
    alt: "Vizhis Dairy Farm - Image 2",
    category: "Farm",
  },
  {
    id: "3",
    src: image3,
    alt: "Vizhis Dairy Farm - Image 3",
    category: "Farm",
  },
  {
    id: "4",
    src: image4,
    alt: "Vizhis Dairy Farm - Image 4",
    category: "Farm",
  },
  {
    id: "5",
    src: image5,
    alt: "Vizhis Dairy Farm - Image 5",
    category: "Farm",
  },
  {
    id: "6",
    src: image6,
    alt: "Vizhis Dairy Farm - Image 6",
    category: "Farm",
  },
];

const categories = ["All", "Farm"];

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
              Take a visual journey through Vizhis Dairy Farm. From our automated facilities 
              to our happy cows, see where your hygienic dairy products come from.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
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
              We welcome visitors who want to see our automated dairy facility and learn 
              about modern, hygienic dairy farming. Schedule a farm tour today!
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