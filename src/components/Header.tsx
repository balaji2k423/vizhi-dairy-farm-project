// src/components/layout/Header.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Gift } from "lucide-react";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "DairyScan", href: "/dairyscan" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const showOldLogo = (isScrolled && isHomePage) || !isHomePage;

  const getMobileHeaderClass = () => {
    if (isMenuOpen && isHomePage) {
      return "bg-gradient-to-br from-emerald-600/20 via-sage-dark/15 to-emerald-800/20 backdrop-blur-3xl shadow-2xl border-b border-white/10";
    }
    if (isScrolled || !isHomePage) {
      return "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100";
    }
    return "bg-transparent";
  };

  // Handle navigation click - scroll to top
  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          getMobileHeaderClass()
        } ${isScrolled || !isHomePage ? "py-2 sm:py-2.5" : "py-4 sm:py-6"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav className="flex items-center justify-between">
            {/* Logo with Smooth Cross-Fade Transition */}
            <Link to="/" className="flex items-center gap-3 group relative z-20" onClick={handleNavClick}>
              {/* New Logo (homepage before scroll) */}
              <img 
                src="/logo1.png" 
                alt="Vizhis Dairy Farm Logo" 
                className={`h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain transition-all duration-700 ease-in-out ${
                  isMenuOpen && isHomePage ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]' : ''
                } ${
                  showOldLogo 
                    ? 'opacity-0 scale-75 absolute' 
                    : 'opacity-100 scale-100 relative'
                }`}
              />
              
              {/* Old Logo (scrolled or other pages) */}
              <img 
                src="/logo.png" 
                alt="Vizhis Dairy Farm Logo" 
                className={`h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-700 ease-in-out ${
                  showOldLogo 
                    ? 'opacity-100 scale-100 relative' 
                    : 'opacity-0 scale-125 absolute'
                }`}
              />
            </Link>

            {/* Desktop Navigation - Enhanced for larger screens */}
            <ul className="hidden lg:flex items-center gap-4 xl:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={handleNavClick}
                    className={`relative font-medium tracking-wide transition-all duration-300 text-sm xl:text-base ${
                      location.pathname === item.href
                        ? "text-[#4a7e5e] font-semibold after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-emerald-600 after:to-sage-dark after:rounded-full"
                        : "text-gray-700 hover:text-[#4a7e5e]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Buttons - Enhanced spacing for Mac */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <a
                href="tel:+918680050504"
                className="inline-flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-white border-2 border-emerald-600 text-emerald-700 font-medium text-sm tracking-wide shadow-md hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-700 hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Call Now</span>
                <span className="xl:hidden">Call</span>
              </a>
              <Link
                to="/contact?sample=true"
                onClick={handleNavClick}
                className="inline-flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-medium text-sm tracking-wide shadow-md hover:from-emerald-700 hover:to-sage-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Gift className="w-4 h-4" />
                <span className="hidden xl:inline">Get Sample</span>
                <span className="xl:hidden">Sample</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle - Creative Morphing Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative p-2 transition-all duration-300 z-20 ${
                isMenuOpen && isHomePage
                  ? "text-white"
                  : "text-gray-800 hover:text-emerald-600"
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                {isMenuOpen ? (
                  <X size={24} className="sm:w-7 sm:h-7 absolute transition-all duration-300 rotate-90 scale-110" />
                ) : (
                  <Menu size={24} className="sm:w-7 sm:h-7 absolute transition-all duration-300" />
                )}
              </div>
            </button>
          </nav>

          {/* Mobile Navigation - Enhanced scroll handling */}
          {isMenuOpen && (
            <div 
              className={`lg:hidden mt-4 sm:mt-6 transition-all duration-300 pb-20 sm:pb-24 max-h-[calc(100vh-120px)] overflow-y-auto ${
                isHomePage
                  ? "pt-2 animate-fade-in"
                  : "border-t border-gray-200 pt-4"
              }`}
            >
              {/* Decorative divider line */}
              {isHomePage && (
                <div className="mb-4 sm:mb-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              )}

              <ul className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <li 
                    key={item.href}
                    style={{ animationDelay: `${index * 40}ms` }}
                    className="animate-slide-in"
                  >
                    <Link
                      to={item.href}
                      onClick={handleNavClick}
                      className={`block py-3 sm:py-4 px-4 sm:px-6 font-semibold transition-all duration-300 text-base sm:text-lg relative group ${
                        isHomePage && isMenuOpen
                          ? location.pathname === item.href
                            ? "text-white"
                            : "text-white/80 hover:text-white"
                          : location.pathname === item.href
                          ? "text-emerald-800 font-bold"
                          : "text-gray-800 hover:text-emerald-700"
                      }`}
                    >
                      {/* Animated underline on hover/active */}
                      <span className={`absolute bottom-0 left-4 sm:left-6 right-4 sm:right-6 h-px bg-gradient-to-r transition-all duration-300 ${
                        isHomePage && isMenuOpen
                          ? location.pathname === item.href
                            ? 'from-white via-white/60 to-transparent opacity-100'
                            : 'from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100'
                          : 'from-emerald-600 via-emerald-400 to-transparent opacity-0'
                      }`}></span>
                      
                      {/* Active indicator - elegant dot */}
                      {location.pathname === item.href && (
                        <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 sm:h-8 rounded-r-full transition-all duration-500 ${
                          isHomePage && isMenuOpen 
                            ? 'bg-gradient-to-b from-white via-white/80 to-white/50 shadow-[0_0_15px_rgba(255,255,255,0.6)]' 
                            : 'bg-gradient-to-b from-emerald-600 to-emerald-400'
                        }`}></span>
                      )}
                      
                      {/* Hover glow effect */}
                      {isHomePage && isMenuOpen && location.pathname !== item.href && (
                        <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300 rounded-lg -mx-2"></span>
                      )}
                      
                      {/* Letter spacing animation on hover */}
                      <span className={`relative z-10 inline-block transition-all duration-300 ${
                        location.pathname === item.href ? 'tracking-wide' : 'tracking-normal group-hover:tracking-wide'
                      } ${
                        isHomePage && isMenuOpen ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]' : ''
                      }`}>
                        {item.label}
                      </span>

                      {/* Subtle chevron for active item */}
                      {location.pathname === item.href && isHomePage && isMenuOpen && (
                        <span className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white/60 text-xs animate-pulse">
                          ●
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Bottom decorative divider */}
              {isHomePage && (
                <div className="mt-4 sm:mt-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              )}
            </div>
          )}
        </div>

        {/* Ambient glow effect that pulses */}
        {isMenuOpen && isHomePage && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        )}
      </header>

      {/* Fixed Bottom Buttons for Mobile/Tablet Only - Enhanced for better touch targets */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-gradient-to-t from-white via-white to-white/95 backdrop-blur-sm p-3 sm:p-4 z-50 border-t border-gray-100 safe-area-inset-bottom">
        <div className="container mx-auto px-4 sm:px-6 max-w-lg">
          <div className="flex gap-2 sm:gap-3">
            <a
              href="tel:+918680050504"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-full font-semibold text-sm transition-all bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-700 hover:text-white shadow-lg hover:shadow-xl active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xs:inline">Call</span>
            </a>
            <Link
              to="/contact?sample=true"
              onClick={handleNavClick}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-full font-semibold text-sm transition-all bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-sage-dark shadow-lg hover:shadow-xl active:scale-95"
            >
              <Gift className="w-4 h-4" />
              <span className="hidden xs:inline">Sample</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Animations with better performance */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        /* Safe area for iOS devices with notch */
        .safe-area-inset-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }

        /* Custom scrollbar for mobile menu (Mac-like) */
        @media (max-width: 1023px) {
          .lg\:hidden.overflow-y-auto::-webkit-scrollbar {
            width: 6px;
          }
          
          .lg\:hidden.overflow-y-auto::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .lg\:hidden.overflow-y-auto::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 3px;
          }
          
          .lg\:hidden.overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.5);
          }
        }

        /* Smooth scrolling for all browsers */
        html {
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Better touch interaction on Mac trackpads */
        @media (hover: hover) and (pointer: fine) {
          .group:hover .group-hover\:opacity-100 {
            transition: opacity 0.3s ease;
          }
        }
      `}</style>
    </>
  );
};

export default Header;