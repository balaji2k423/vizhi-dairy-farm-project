import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";
import productMilk from "@/assets/milkbottle.png";
import productCurd from "@/assets/product-curd.jpg";
import productGhee from "@/assets/product-ghee.jpg";
import productButter from "@/assets/product-butter.jpg";
import productPaneer from "@/assets/product-paneer.jpg";
import { Clock, Sparkles, Shield, Leaf } from "lucide-react";

const availableProducts: Product[] = [
  {
    id: "1",
    name: "Farm Fresh Milk",
    description: "Pure, unprocessed whole milk delivered fresh from our happy, grass-fed cows. Rich in nutrients and natural flavor.",
    price: "₹60/Litre",
    image: productMilk,
    category: "Milk",
    badge: "Available Now",
  },
  {
    id: "2",
    name: "Natural Curd",
    description: "Creamy, probiotic-rich curd made using traditional fermentation methods. Perfect for your daily meals.",
    price: "₹80/500g",
    image: productCurd,
    category: "Curd",
    badge: "Available Now",
  },
];

const comingSoonProducts = [
  {
    id: "3",
    name: "Pure Desi Ghee",
    description: "Golden, aromatic ghee made from the finest butter using the traditional bilona method.",
    price: "₹650/500g",
    image: productGhee,
    category: "Ghee",
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
  },
  {
    id: "6",
    name: "Buttermilk",
    description: "Refreshing, probiotic-rich buttermilk perfect for digestion and hydration.",
    price: "₹40/500ml",
    image: productCurd,
    category: "Buttermilk",
  },
];

const milkVariants = [
  {
    name: "Whole Milk",
    fat: "6% Fat",
    description: "Full cream milk with natural richness",
    price: "₹60/Litre",
    icon: Sparkles,
    image: productMilk, // Replace with actual image path from assets
  },
  {
    name: "Toned Milk",
    fat: "3% Fat",
    description: "Balanced nutrition with reduced fat",
    price: "₹50/Litre",
    icon: Shield,
    image: productMilk, // Replace with actual image path from assets
  },
  {
    name: "Double Toned Milk",
    fat: "1.5% Fat",
    description: "Low-fat option for health-conscious",
    price: "₹45/Litre",
    icon: Leaf,
    image: productMilk, // Replace with actual image path from assets
  },
];

const Products = () => {
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
              Discover our premium dairy products, processed with 100% automated machinery 
              and zero human contact. Start your journey to pure, hygienic dairy today.
            </p>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Available Now"
            title="Our Current Offerings"
            subtitle="Premium quality dairy products processed with complete automation and zero human touch."
          />

          {/* Milk Variants */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {milkVariants.map((variant) => (
                <div
                  key={variant.name}
                  className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden bg-sage-light">
                    <img
                      src={variant.image}
                      alt={variant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Available Now
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <variant.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-xl">
                          {variant.name}
                        </h3>
                        <p className="text-sm text-primary font-medium">{variant.fat}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {variant.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xl font-semibold text-foreground">
                        {variant.price}
                      </span>
                      <a
                        href="/contact"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Available Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {availableProducts.filter(p => p.category !== 'Milk').map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-sage-light">
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
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 relative"
              >
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 z-10 bg-accent text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </div>

                {/* Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-xl mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground italic">
                      Launching Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notify Me Section */}
          <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-soft">
            <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-serif font-bold mb-4">
              Want to Know When We Launch?
            </h3>
            <p className="text-muted-foreground mb-8">
              Be the first to know when our new products become available. 
              Contact us to get notified about upcoming launches.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>

      {/* Quality Banner */}
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
                  Products Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Easy Ordering"
            title="How to Get Our Products"
            subtitle="Three simple ways to enjoy our fresh dairy products at your doorstep."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-serif font-semibold text-xl mb-3">
                Call or WhatsApp
              </h3>
              <p className="text-muted-foreground text-sm">
                Reach us directly at +91 98765 43210 to place your order
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-serif font-semibold text-xl mb-3">
                Fill Contact Form
              </h3>
              <p className="text-muted-foreground text-sm">
                Submit your details through our website and we'll reach out
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-serif font-semibold text-xl mb-3">
                Get Sample
              </h3>
              <p className="text-muted-foreground text-sm">
                Try our products risk-free with a complimentary sample delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;