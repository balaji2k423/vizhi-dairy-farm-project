import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import type { Product } from "@/types";
import productMilk from "@/assets/milkbottle.png";
import productCurd from "@/assets/product-curd.jpg";
import productGhee from "@/assets/product-ghee.jpg";
import productButter from "@/assets/product-butter.jpg";
import productPaneer from "@/assets/product-paneer.jpg";
import { Clock, Sparkles, Shield, Leaf, Droplet } from "lucide-react";

// Milk variants only (Curd moved to Coming Soon)
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
    description: "Balanced nutrition – perfect for daily consumption",
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

// Coming Soon products (Curd added here)
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

  // Scroll to section based on hash
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Delay to ensure page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section - Green gradient */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-100/80 via-emerald-50/70 to-teal-50/60">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-emerald-700 uppercase tracking-wider mb-4">
              Our Products
            </span>
            <h1 className="heading-xl text-emerald-950 mb-6">
              Farm Fresh Dairy Products
            </h1>
            <p className="body-lg text-emerald-800/80">
              Discover our premium dairy products, processed with 100% automated machinery 
              and zero human contact. Start your journey to pure, hygienic dairy today.
            </p>
          </div>
        </div>
      </section>

      {/* Milk Range – Main Products */}
      <section id="milk-range" className="section-padding scroll-mt-20 bg-emerald-50/30">
        <div className="container-custom">
          <SectionHeading
            badge="Fresh Daily"
            title="Our Milk Range"
            subtitle="Different fat levels to suit every need – all processed with complete automation and zero human touch."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {milkVariants.map((variant) => (
              <div
                key={variant.id}
                id={variant.id}
                className="bg-emerald-50/60 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 group border border-emerald-200/50 scroll-mt-24"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-emerald-100/70 to-emerald-50/50 flex items-center justify-center p-6">
                  <img
                    src={variant.image}
                    alt={variant.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Available Now
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-200/70 flex items-center justify-center">
                      <variant.icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-xl text-emerald-900">
                        {variant.name}
                      </h3>
                      <p className="text-sm text-emerald-700 font-medium">{variant.fat}</p>
                    </div>
                  </div>
                  <p className="text-emerald-800/70 text-sm mb-6 line-clamp-2">
                    {variant.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-emerald-200/50">
                    <span className="text-xl font-semibold text-emerald-900">
                      {variant.price}
                    </span>
                    <a
                      href="/contact?order=true"
                      className="px-5 py-2.5 bg-emerald-700 text-white rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section - Green gradient */}
      <section id="coming-soon" className="section-padding bg-gradient-to-br from-emerald-100/80 via-emerald-50/70 to-teal-50/60 scroll-mt-20">
        <div className="container-custom">
          <SectionHeading
            badge="Coming Soon"
            title="Expanding Our Range"
            subtitle="We're working hard to bring you more premium dairy products, all processed with the same automated, touchless technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-emerald-50/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 relative border border-emerald-200/50 scroll-mt-24"
              >
                <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </div>

                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/70 to-emerald-50/50 flex items-center justify-center p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain opacity-60"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
                </div>

                <div className="p-6">
                  <span className="text-sm font-medium text-emerald-700 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-serif font-semibold text-xl mt-2 mb-2 text-emerald-900">
                    {product.name}
                  </h3>
                  <p className="text-emerald-800/70 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-emerald-200/50">
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

          {/* Notify Me Section - Green tone */}
          <div className="mt-16 bg-emerald-50/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-soft border border-emerald-200/50">
            <Clock className="w-16 h-16 text-emerald-700 mx-auto mb-6" />
            <h3 className="text-2xl font-serif font-bold mb-4 text-emerald-900">
              Want to Know When We Launch?
            </h3>
            <p className="text-emerald-800/70 mb-8">
              Be the first to know when our new products become available. 
              Contact us to get notified about upcoming launches.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-emerald-700 text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>

      {/* Quality Banner - Kept as gradient-hero */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-primary-foreground mb-6">
                Why Our Products Stand Out
              </h2>
              <p className="body-lg text-primary-foreground/90 mb-8">
                All our dairy products are made from milk sourced exclusively from our farm. 
                We never use preservatives, additives, or artificial ingredients. What you get 
                is 100% natural, farm-fresh goodness processed with complete automation.
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
                    className="flex items-center gap-3 text-primary-foreground/90"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <p className="text-5xl font-bold text-primary-foreground mb-2">
                  100%
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Natural & Pure
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <p className="text-5xl font-bold text-primary-foreground mb-2">
                  0
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Human Touch
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <p className="text-5xl font-bold text-primary-foreground mb-2">
                  24h
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Farm to Door
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <p className="text-5xl font-bold text-primary-foreground mb-2">
                  5
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Milk Variants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section - Green tones */}
      <section className="section-padding bg-emerald-50/30">
        <div className="container-custom">
          <SectionHeading
            badge="Easy Ordering"
            title="How to Get Our Products"
            subtitle="Three simple ways to enjoy our fresh dairy products at your doorstep."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Call or WhatsApp",
                desc: "Reach us directly at +91 86800 50504 to place your order"
              },
              {
                step: "2",
                title: "Fill Contact Form",
                desc: "Submit your details through our website and we'll reach out"
              },
              {
                step: "3",
                title: "Get Sample",
                desc: "Try our products risk-free with a complimentary sample delivery"
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-200/70 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-emerald-800">{item.step}</span>
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3 text-emerald-900">
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