// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

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
    <footer className="bg-sage-dark text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3.5 mb-6 group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg shadow-md">
                <img
                  src={logo}
                  // src="/vizhis-logo.png"   // ← Use this if logo is in public folder
                  alt="Vizhis Dairy Farm Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-2xl md:text-2.5xl text-white tracking-tight">
                  Vizhis
                </span>
                <span className="text-xs md:text-sm text-emerald-300/90 tracking-wider uppercase font-medium">
                  Dairy Farm
                </span>
              </div>
            </Link>

            <p className="text-primary-foreground/75 leading-relaxed mb-8 text-sm md:text-base">
              Pure, fresh dairy straight from our farm to your home. 
              Trusted quality since 2025.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600/40 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg md:text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {["Home", "About Us", "Products", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/75 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2"
                    onClick={scrollToTop} // ← Scroll to top on click
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif font-semibold text-lg md:text-xl mb-6 text-white">Our Products</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {["Fresh Milk", "Natural Curd", "Pure Ghee", "Farm Butter", "Paneer"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-primary-foreground/75 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2"
                    onClick={scrollToTop} // ← Scroll to top on click
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg md:text-xl mb-6 text-white">Contact Us</h4>
            <ul className="space-y-5 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Annur Rd, to, Somanur Rd,<br />
                  Karumathampatti, Kaduvettipalayam,<br />
                  Coimbatore, Tamil Nadu 641659
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+918680050504"
                  className="text-primary-foreground/80 hover:text-emerald-300 transition-colors"
                >
                  +91 86800 50504
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:info@vizhidairy.com"
                  className="text-primary-foreground/80 hover:text-emerald-300 transition-colors"
                >
                  info@vizhidairy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} Vizhis Dairy Farm. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;