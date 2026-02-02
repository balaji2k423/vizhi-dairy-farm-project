import { Link } from "react-router-dom";
import { Droplets, Truck, Award, Users, ArrowRight, Bot, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";

import productMilk from "@/assets/milkbottle.png";
import productCurd from "@/assets/product-curd.jpg";
import galleryCare from "@/assets/img6.jpeg";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Farm Fresh Milk",
    description: "Pure, unprocessed whole milk delivered fresh from our happy, grass-fed cows.",
    price: "₹60/Litre",
    image: productMilk,
    category: "Milk",
    badge: "Available Now",
  },
  {
    id: "2",
    name: "Natural Curd",
    description: "Creamy, probiotic-rich curd made using traditional fermentation methods.",
    price: "₹80/500g",
    image: productCurd,
    category: "Curd",
    badge: "Available Now",
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
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-custom">
          <SectionHeading
            badge="Why Choose Us"
            title="The Vizhis Difference"
            subtitle="We're revolutionizing dairy hygiene with complete automation and zero human contact."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-shadow duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Products"
            title="Farm Fresh Dairy"
            subtitle="Discover our premium dairy products, processed with 100% automation and zero human touch."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-sage-dark transition-colors group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={galleryCare}
                  alt="Modern automated dairy facility at Vizhis Dairy Farm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-card hidden md:block">
                <p className="font-serif text-3xl font-bold text-primary">2025</p>
                <p className="text-muted-foreground text-sm">Established</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <SectionHeading
                badge="Our Story"
                title="A New Era of Dairy Hygiene"
                align="left"
              />
              <p className="body-md text-muted-foreground mb-6">
                Vizhis Dairy Farm represents the future of dairy production. As an emerging 
                dairy farm established in 2025, we've embraced cutting-edge automation technology 
                to ensure the highest standards of hygiene and safety.
              </p>
              <p className="body-md text-muted-foreground mb-8">
                Our commitment to zero human contact processing, combined with ethical 
                farming practices, makes us the new standard in premium dairy products. 
                We're building trust one bottle at a time.
              </p>
              <Link to="/about" className="btn-hero inline-flex items-center gap-2">
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Ready to Experience Pure Hygiene?
          </h2>
          <p className="body-lg text-primary-foreground/85 max-w-2xl mx-auto mb-10">
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