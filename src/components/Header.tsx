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

  // For mobile: green background when menu is open, otherwise transparent/white based on scroll
  const getMobileHeaderClass = () => {
    // Mobile menu open on homepage: custom green background
    if (isMenuOpen && isHomePage) {
      return "bg-[#4a7e5e]";
    }
    // Scrolled or not on homepage: white background
    if (isScrolled || !isHomePage) {
      return "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100";
    }
    // Homepage, not scrolled, menu closed: transparent
    return "bg-transparent";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          getMobileHeaderClass()
        } py-${isScrolled || !isHomePage ? "2.5" : "6"}`}
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
                        ? "text-[#4a7e5e] font-semibold after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-[#4a7e5e]"
                        : "text-gray-700 hover:text-[#4a7e5e]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ── Desktop CTA Buttons ── */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center px-5 py-2 rounded-full bg-white border-2 border-[#4a7e5e] text-[#4a7e5e] font-medium text-sm tracking-wide shadow-md hover:bg-[#4a7e5e] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Call Now
              </a>
              <Link
                to="/contact?sample=true"
                className="inline-flex items-center px-5 py-2 rounded-full bg-[#4a7e5e] text-white font-medium text-sm tracking-wide shadow-md hover:bg-[#3d6a4d] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Sample
              </Link>
            </div>

            {/* ── Mobile Menu Toggle – slightly smaller ── */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-1.5 transition-colors ${
                isMenuOpen && isHomePage
                  ? "text-white hover:text-gray-100"
                  : "text-gray-800 hover:text-[#4a7e5e]"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </nav>

          {/* ── Compact Mobile Navigation ── */}
          {isMenuOpen && (
            <div className={`md:hidden mt-3 border-t transition-all pb-20 ${
              isHomePage
                ? "border-[#4a7e5e] pt-3"
                : "border-gray-200 pt-3"
            }`}>
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`block py-2.5 px-4 rounded-lg font-medium transition-all text-base ${
                        isHomePage && isMenuOpen
                          ? location.pathname === item.href
                            ? "bg-white/20 text-white font-semibold"
                            : "text-white hover:bg-white/10"
                          : location.pathname === item.href
                          ? "bg-emerald-50 text-emerald-800 font-semibold"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* ── Fixed Bottom Buttons for Mobile Only ── */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gradient-to-t from-white via-white to-white/95 backdrop-blur-sm p-4 z-50 safe-bottom">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex gap-3">
            <a
              href="tel:+918680050504"
              className="flex-1 text-center py-3 px-4 rounded-full font-semibold text-sm transition-all bg-white border-2 border-[#4a7e5e] text-[#4a7e5e] hover:bg-[#4a7e5e] hover:text-white shadow-lg hover:shadow-xl active:scale-95"
            >
              Call Now
            </a>
            <Link
              to="/contact?sample=true"
              className="flex-1 text-center py-3 px-4 rounded-full font-semibold text-sm transition-all bg-[#4a7e5e] text-white hover:bg-[#3d6a4d] shadow-lg hover:shadow-xl active:scale-95"
            >
              Get Sample
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;