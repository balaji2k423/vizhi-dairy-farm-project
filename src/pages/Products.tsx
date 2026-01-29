import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";

import productMilk from "@/assets/product-milk.jpg";
import productCurd from "@/assets/product-curd.jpg";
import productGhee from "@/assets/product-ghee.jpg";
import productButter from "@/assets/product-butter.jpg";
import productPaneer from "@/assets/product-paneer.jpg";

const allProducts: Product[] = [
  {
    id: "1",
    name: "Farm Fresh Milk",
    description: "Pure, unprocessed whole milk delivered fresh from our happy, grass-fed cows. Rich in nutrients and natural flavor.",
    price: "₹60/Litre",
    image: productMilk,
    category: "Milk",
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Natural Curd",
    description: "Creamy, probiotic-rich curd made using traditional fermentation methods. Perfect for your daily meals.",
    price: "₹80/500g",
    image: productCurd,
    category: "Curd",
  },
  {
    id: "3",
    name: "Pure Desi Ghee",
    description: "Golden, aromatic ghee made from the finest butter using the traditional bilona method.",
    price: "₹650/500g",
    image: productGhee,
    category: "Ghee",
    badge: "Premium",
  },
  {
    id: "4",
    name: "Fresh Butter",
    description: "Creamy, unsalted butter churned fresh daily. Perfect for cooking and spreading.",
    price: "₹280/250g",
    image: productButter,
    category: "Butter",
  },
  {
    id: "5",
    name: "Fresh Paneer",
    description: "Soft, protein-rich cottage cheese made from pure milk. Ideal for curries and snacks.",
    price: "₹320/500g",
    image: productPaneer,
    category: "Paneer",
    badge: "Fresh Daily",
  },
  {
    id: "6",
    name: "Toned Milk",
    description: "Lower fat content milk perfect for those watching their calorie intake without compromising on taste.",
    price: "₹50/Litre",
    image: productMilk,
    category: "Milk",
  },
];

const categories = ["All", "Milk", "Curd", "Ghee", "Butter", "Paneer"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-soft">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Our Products
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              Farm Fresh Dairy Products
            </h1>
            <p className="body-lg text-muted-foreground">
              Discover our complete range of premium dairy products, carefully crafted 
              with traditional methods and delivered fresh to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Banner */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom">
          <div className="bg-card rounded-3xl p-8 md:p-16 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading
                  badge="Quality Promise"
                  title="Every Product, A Promise of Purity"
                  align="left"
                />
                <p className="body-md text-muted-foreground mb-8">
                  All our dairy products are made from milk sourced exclusively from our 
                  farm. We never use preservatives, additives, or artificial ingredients. 
                  What you get is 100% natural, farm-fresh goodness.
                </p>
                <ul className="space-y-4">
                  {[
                    "No preservatives or additives",
                    "FSSAI certified products",
                    "Farm to door within 24 hours",
                    "Traditional preparation methods",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={productGhee}
                    alt="Premium ghee quality"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elevated">
                  <p className="font-serif text-3xl font-bold">100%</p>
                  <p className="text-sm opacity-90">Natural & Pure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
