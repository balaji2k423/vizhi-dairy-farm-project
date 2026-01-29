import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vizhi Dairy Farm - Cows grazing in green pastures"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-dark/90 via-sage-dark/70 to-sage-dark/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Leaf className="w-4 h-4 text-gold" />
            <span className="text-sm text-primary-foreground font-medium">
              100% Natural & Organic
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-xl text-primary-foreground mb-6 animate-fade-up delay-100">
            Pure Dairy
            <br />
            <span className="text-gold">From Our Farm</span>
            <br />
            To Your Table
          </h1>

          {/* Subtitle */}
          <p className="body-lg text-primary-foreground/85 mb-10 animate-fade-up delay-200">
            Experience the authentic taste of farm-fresh dairy products. 
            At Vizhi Dairy Farm, we believe in nurturing nature and delivering 
            purity in every drop.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up delay-300">
            <Link to="/products" className="btn-hero flex items-center gap-2">
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-hero-outline">
              Our Story
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 animate-fade-up delay-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">40+ Years</p>
                <p className="text-primary-foreground/70 text-sm">of Excellence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">10,000+</p>
                <p className="text-primary-foreground/70 text-sm">Happy Families</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">100%</p>
                <p className="text-primary-foreground/70 text-sm">Natural Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
