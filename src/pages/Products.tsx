// src/pages/Products.tsx
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import type { Product } from "@/types";
import productMilk from "@/assets/milkbottle.png";
import productCurd from "@/assets/product-curd.jpg";
import productGhee from "@/assets/product-ghee.jpg";
import productButter from "@/assets/product-butter.jpg";
import productPaneer from "@/assets/product-paneer.jpg";
import { Clock, Sparkles, Shield, Leaf, Droplet } from "lucide-react";

const milkVariants = [
  {
    id: "double-toned-milk",
    name: "Double Toned Milk",
    fat: "1.5% Fat",
    description: "Light & healthy – low-fat option for calorie-conscious diets",
    price: "₹44 / Litre",
    icon: Leaf,
    image: productMilk,
  },
  {
    id: "toned-milk",
    name: "Toned Milk",
    fat: "3% Fat",
    description: "Provides wholesome, balanced nutrition to support dietary needs",
    price: "₹54 / Litre",
    icon: Shield,
    image: productMilk,
  },
  {
    id: "standardized-milk",
    name: "Standardized Milk",
    fat: "3.5% Fat",
    description: "Rich & creamy – ideal for tea, coffee & household use",
    price: "₹64 / Litre",
    icon: Droplet,
    image: productMilk,
  },
  {
    id: "full-cream-milk",
    name: "Full Cream Milk",
    fat: "4% Fat",
    description: "Extra creamy & nutritious – great for growing kids",
    price: "₹74 / Litre",
    icon: Sparkles,
    image: productMilk,
  },
  {
    id: "gold-milk",
    name: "Gold Milk (High Fat)",
    fat: "4.5% Fat",
    description: "Premium rich milk – luxurious taste & texture",
    price: "₹84 / Litre",
    icon: Sparkles,
    image: productMilk,
  },
];

const comingSoonProducts = [
  {
    id: "curd",
    name: "Natural Curd",
    description: "Thick, creamy, probiotic-rich curd made traditionally from full cream milk using time-tested fermentation methods.",
    price: "₹80/500g",
    image: productCurd,
    category: "Curd",
  },
  {
    id: "ghee",
    name: "Pure Desi Ghee",
    description: "Golden, aromatic ghee made from the finest butter using the traditional bilona method.",
    price: "₹650/500g",
    image: productGhee,
    category: "Ghee",
  },
  {
    id: "butter",
    name: "Fresh Butter",
    description: "Creamy, unsalted butter churned fresh daily. Perfect for cooking and spreading.",
    price: "₹280/250g",
    image: productButter,
    category: "Butter",
  },
  {
    id: "paneer",
    name: "Fresh Paneer",
    description: "Soft, protein-rich cottage cheese made from pure milk. Ideal for curries and snacks.",
    price: "₹320/500g",
    image: productPaneer,
    category: "Paneer",
  },
  {
    id: "buttermilk",
    name: "Buttermilk",
    description: "Refreshing, probiotic-rich buttermilk perfect for digestion and hydration.",
    price: "₹40/500ml",
    image: productCurd,
    category: "Buttermilk",
  },
];

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero - tighter */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-emerald-100/80 via-emerald-50/70 to-teal-50/60">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-emerald-700 uppercase tracking-wider mb-4">
              Our Products
            </span>
            <h1 className="heading-xl text-emerald-950 mb-5">
              Farm Fresh Dairy Products
            </h1>
            <p className="body-lg text-emerald-800/80 max-w-3xl mx-auto">
              Discover our premium dairy products, processed with 100% automated machinery 
              and zero human contact.
            </p>
          </div>
        </div>
      </section>

      {/* Milk Range */}
      <section id="milk-range" className="py-12 scroll-mt-20 bg-emerald-50/30">
        <div className="container-custom">
          <SectionHeading
            badge="Fresh Daily"
            title="Our Milk Range"
            subtitle="Different fat levels to suit every need – all processed with complete automation and zero human touch."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milkVariants.map((variant) => (
              <div
                key={variant.id}
                id={variant.id}
                className="bg-emerald-50/60 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 group border border-emerald-200/50 scroll-mt-24"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-100/70 to-emerald-50/50 flex items-center justify-center p-5">
                  <img
                    src={variant.image}
                    alt={variant.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Available Now
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-200/70 flex items-center justify-center">
                      <variant.icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg text-emerald-900">
                        {variant.name}
                      </h3>
                      <p className="text-sm text-emerald-700 font-medium">{variant.fat}</p>
                    </div>
                  </div>
                  <p className="text-emerald-800/70 text-sm mb-4 line-clamp-2">
                    {variant.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-emerald-200/50">
                    <span className="text-xl font-semibold text-emerald-900">
                      {variant.price}
                    </span>
                    <Link
                      to={`/order?product=${encodeURIComponent(variant.name)}`}
                      className="px-5 py-2 bg-emerald-700 text-white rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section id="coming-soon" className="py-12 bg-gradient-to-br from-emerald-100/80 via-emerald-50/70 to-teal-50/60 scroll-mt-20">
        <div className="container-custom">
          <SectionHeading
            badge="Coming Soon"
            title="Expanding Our Range"
            subtitle="We're working hard to bring you more premium dairy products with the same automated technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-emerald-50/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 relative border border-emerald-200/50 scroll-mt-24"
              >
                <div className="absolute top-3 right-3 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </div>

                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/70 to-emerald-50/50 flex items-center justify-center p-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain opacity-65"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
                </div>

                <div className="p-5">
                  <span className="text-sm font-medium text-emerald-700 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-serif font-semibold text-lg mt-2 mb-2 text-emerald-900">
                    {product.name}
                  </h3>
                  <p className="text-emerald-800/70 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-emerald-200/50">
                    <span className="text-lg font-semibold text-emerald-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-emerald-700/70 italic font-medium">
                      Launching Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notify Me - tighter */}
          <div className="mt-12 bg-emerald-50/80 backdrop-blur-sm rounded-2xl p-8 text-center max-w-3xl mx-auto shadow-soft border border-emerald-200/50">
            <Clock className="w-14 h-14 text-emerald-700 mx-auto mb-5" />
            <h3 className="text-2xl font-serif font-bold mb-3 text-emerald-900">
              Want to Know When We Launch?
            </h3>
            <p className="text-emerald-800/70 mb-6">
              Be the first to know when our new products become available.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-emerald-700 text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Notified
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Banner */}
      <section className="py-12 bg-gradient-hero">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="heading-lg text-primary-foreground mb-5">
                Why Our Products Stand Out
              </h2>
              <p className="body-lg text-primary-foreground/90 mb-6">
                All our dairy products are made from milk sourced exclusively from our farm. 
                We never use preservatives, additives, or artificial ingredients.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "100% Automated Processing",
                  "Zero Human Contact",
                  "No Preservatives or Additives",
                  "FSSAI Certified Products",
                  "Farm to Door Within 24 Hours",
                  "Traditional Preparation Methods",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-primary-foreground/90 text-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "100%", label: "Natural & Pure" },
                { value: "0", label: "Human Touch" },
                { value: "24h", label: "Farm to Door" },
                { value: "5", label: "Milk Variants" },
              ].map((stat) => (
                <div key={stat.label} className="bg-primary-foreground/15 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/10">
                  <p className="text-5xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/80 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Order - tighter */}
      <section className="py-12 bg-emerald-50/30">
        <div className="container-custom">
          <SectionHeading
            badge="Easy Ordering"
            title="How to Get Our Products"
            subtitle="Three simple ways to enjoy our fresh dairy at your doorstep."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Call or WhatsApp", desc: "Reach us at +91 86800 50504" },
              { step: "2", title: "Fill Contact Form", desc: "Submit details — we'll reach out" },
              { step: "3", title: "Get Sample", desc: "Try risk-free with free sample" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-200/70 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-800">{item.step}</span>
                </div>
                <h3 className="font-serif font-semibold text-xl mb-2 text-emerald-900">
                  {item.title}
                </h3>
                <p className="text-emerald-800/70 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;