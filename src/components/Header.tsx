// src/components/layout/Header.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/types"; // adjust path if needed

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on homepage or other pages
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // trigger earlier for compact feel
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Show old logo when: scrolled on homepage OR on any other page
  const showOldLogo = (isScrolled && isHomePage) || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-gray-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* ── Logo with Smooth Cross-Fade Transition ── */}
          <Link to="/" className="flex items-center gap-3 group relative">
            {/* New Logo (homepage before scroll) */}
            <img 
              src="/logo1.png" 
              alt="Vizhis Dairy Farm Logo" 
              className={`h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain transition-all duration-700 ease-in-out ${
                showOldLogo 
                  ? 'opacity-0 scale-75 absolute' 
                  : 'opacity-100 scale-100 relative'
              }`}
            />
            
            {/* Old Logo (scrolled or other pages) */}
            <img 
              src="/logo.png" 
              alt="Vizhis Dairy Farm Logo" 
              className={`h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-700 ease-in-out ${
                showOldLogo 
                  ? 'opacity-100 scale-100 relative' 
                  : 'opacity-0 scale-125 absolute'
              }`}
            />
          </Link>

          {/* ── Desktop Navigation – smaller & tighter ── */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`relative font-medium tracking-wide transition-colors duration-300 text-sm lg:text-base ${
                    location.pathname === item.href
                      ? "text-emerald-700 font-semibold after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-emerald-600"
                      : "text-gray-700 hover:text-emerald-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Smaller CTA Button ── */}
          <Link
            to="/contact?sample=true"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-emerald-600 text-white font-medium text-sm tracking-wide shadow-md hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Sample
          </Link>

          {/* ── Mobile Menu Toggle – slightly smaller ── */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 text-gray-800 hover:text-emerald-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* ── Compact Mobile Navigation ── */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 border-t border-gray-200 pt-3 pb-5">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`block py-2.5 px-4 rounded-lg font-medium transition-all text-base ${
                      location.pathname === item.href
                        ? "bg-emerald-50 text-emerald-800 font-semibold"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 px-4">
                <Link
                  to="/contact?sample=true"
                  className="block text-center py-2.5 rounded-full bg-emerald-600 text-white font-medium text-base shadow-md hover:bg-emerald-700 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Sample
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;