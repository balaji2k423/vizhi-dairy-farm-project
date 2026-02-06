// src/pages/Home.tsx
import { Link } from "react-router-dom";
import { Droplets, Truck, Award, Users, ArrowRight, Bot, Sparkles, Eye } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";

import productMilk from "@/assets/milkbottle.png";
import productCurd from "@/assets/product-curd.jpg";
import galleryCare from "@/assets/img6.jpeg";

const featuredProducts: Product[] = [
  {
    id: "milk-1",
    name: "Farm Fresh Milk",
    description: "Pure, unprocessed whole milk delivered fresh from our happy, grass-fed cows.",
    price: "Starting from ₹44/Litre",
    image: productMilk,
    category: "Milk",
    badge: "Available Now",
  },
  {
    id: "curd",
    name: "Natural Curd",
    description: "Creamy, probiotic-rich curd made using traditional fermentation methods.",
    price: "",
    image: productCurd,
    category: "Curd",
    badge: "Coming Soon",
  },
];

const features = [
  {
    icon: Bot,
    title: "100% Automated Processing",
    description: "Zero human contact throughout the entire production process for maximum hygiene.",
  },
  {
    icon: Sparkles,
    title: "Maximum Hygiene Standards",
    description: "Hospital-grade cleanliness maintained through continuous automated sanitization.",
  },
  {
    icon: Truck,
    title: "Farm to Door Delivery",
    description: "Fresh products delivered to your doorstep within hours of production.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "Rigorous quality checks at every automated step ensure perfect products.",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Features - tighter */}
      <section className="py-12 bg-gradient-to-br from-emerald-100/70 via-emerald-50/60 to-teal-50/50">
        <div className="container-custom">
          <SectionHeading
            badge="Why Choose Us"
            title="The Vizhis Difference"
            subtitle="We're revolutionizing dairy hygiene with complete automation and zero human contact."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-emerald-50/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 border border-emerald-200/50"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-emerald-200/70 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2 text-emerald-900">{feature.title}</h3>
                <p className="text-emerald-800/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - tighter */}
      <section className="py-12 bg-emerald-50/30">
        <div className="container-custom">
          <SectionHeading
            badge="Our Products"
            title="Farm Fresh Dairy"
            subtitle="Discover our premium dairy products, processed with 100% automation and zero human touch."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              View All Products
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview - tighter */}
      <section className="py-12 bg-gradient-to-br from-emerald-100/70 via-emerald-50/60 to-teal-50/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={galleryCare}
                  alt="Modern automated dairy facility at Vizhis Dairy Farm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-emerald-50 rounded-2xl p-5 shadow-card hidden md:block border border-emerald-200/50">
                <p className="font-serif text-3xl font-bold text-emerald-800">2025</p>
                <p className="text-emerald-700/70 text-sm">Established</p>
              </div>
            </div>

            <div>
              <SectionHeading
                badge="Our Story"
                title="A New Era of Dairy Hygiene"
                align="left"
              />
              <p className="body-md text-emerald-800/80 mb-4">
                Vizhis Dairy Farm represents the future of dairy production. As an emerging 
                dairy farm established in 2025, we've embraced cutting-edge automation technology 
                to ensure the highest standards of hygiene and safety.
              </p>
              <p className="body-md text-emerald-800/80 mb-6">
                Our commitment to zero human contact processing, combined with ethical 
                farming practices, makes us the new standard in premium dairy products.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-full font-medium hover:bg-emerald-800 transition-all"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - tighter */}
      <section className="py-12 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="heading-lg text-primary-foreground mb-5">
            Ready to Experience Pure Hygiene?
          </h2>
          <p className="body-lg text-primary-foreground/85 max-w-2xl mx-auto mb-8">
            Join families who are choosing the safest, most hygienic dairy products. 
            Order now and experience 100% automated, touchless processing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="btn-hero-outline bg-primary-foreground/10">
              Browse Products
            </Link>
            <Link to="/contact" className="btn-hero bg-accent hover:bg-gold-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;