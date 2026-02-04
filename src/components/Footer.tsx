// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, FileText, Building2 } from "lucide-react";

// Logo import (choose one based on your folder structure)
// Option 1: src/assets
import logo from "@/assets/logo2.jpg";

// Option 2: public folder (no import needed)
// const logoPath = "/vizhis-logo.png";

const Footer = () => {
  // Function to scroll to top smoothly when clicking footer links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-sage-dark via-sage-dark to-emerald-950 text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-10">
          
          {/* Brand & Description - Spans 3 columns on large screens */}
          <div className="lg:col-span-3">
            <Link to="/" className="flex items-center gap-3 mb-5 group" onClick={scrollToTop}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl shadow-lg border border-white/20">
                <img
                  src={logo}
                  // src="/vizhis-logo.png"   // ← Use this if logo is in public folder
                  alt="Vizhis Dairy Farm Logo"
                  className="w-9 h-9 md:w-11 md:h-11 object-contain"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-xl md:text-2xl text-white tracking-tight">
                  Vizhis Dairy
                </span>
                <span className="text-xs text-emerald-300/90 tracking-wider uppercase font-medium">
                  Farm Fresh & Pure
                </span>
              </div>
            </Link>

            <p className="text-primary-foreground/70 leading-relaxed mb-6 text-sm">
              Experience the purity of farm-fresh dairy delivered with zero human touch. 
              100% automated processing for unmatched hygiene and quality.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", link: "#" },
                { icon: Instagram, label: "Instagram", link: "#" },
                { icon: Twitter, label: "Twitter", link: "#" },
              ].map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-emerald-500/30 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-emerald-400/50"
                  aria-label={label}
                >
                  <Icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-semibold text-base md:text-lg mb-5 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Products", path: "/products" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/70 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group"
                    onClick={scrollToTop}
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-400/60 group-hover:bg-emerald-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-semibold text-base md:text-lg mb-5 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-400 rounded-full"></span>
              Our Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "Whole Milk (6% Fat)",
                "Toned Milk (3% Fat)",
                "Double Toned Milk",
                "Natural Curd",
                "Pure Ghee",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-primary-foreground/70 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 group"
                    onClick={scrollToTop}
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-400/60 group-hover:bg-emerald-400 transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-semibold text-base md:text-lg mb-5 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-400 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/75 leading-relaxed">
                 Coimbatore, Tamil Nadu 641659
                 <br />
                 
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+918680050504"
                  className="text-primary-foreground/75 hover:text-emerald-300 transition-colors font-medium"
                >
                  +91 86800 50504
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:info@vizhidairy.com"
                  className="text-primary-foreground/75 hover:text-emerald-300 transition-colors"
                >
                  info@vizhidairy.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Information - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-semibold text-base md:text-lg mb-5 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-400 rounded-full"></span>
              Business Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FileText size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/50 text-xs mb-0.5">GST Number</p>
                  <p className="text-primary-foreground/85 font-mono font-medium">
                    33AALCV5301K1ZA
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Building2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/50 text-xs mb-0.5">CIN Number</p>
                  <p className="text-primary-foreground/85 font-mono font-medium">
                    U10500TZ2025PTC036482
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-xs md:text-sm text-primary-foreground/60 text-center md:text-left">
            © {new Date().getFullYear()} Vizhis Dairy Farm. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-primary-foreground/60 hover:text-emerald-300 transition-colors"
              onClick={scrollToTop}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-primary-foreground/60 hover:text-emerald-300 transition-colors"
              onClick={scrollToTop}
            >
              Terms of Service
            </Link>
            <Link 
              to="/refund-policy" 
              className="text-primary-foreground/60 hover:text-emerald-300 transition-colors"
              onClick={scrollToTop}
            >
              Refund Policy
            </Link>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-primary-foreground/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span>100% Automated Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span>Zero Human Touch</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span>Farm Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span>FSSAI Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;