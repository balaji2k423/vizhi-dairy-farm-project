// src/components/layout/Header.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Gift } from "lucide-react";
import type { NavItem } from "@/types"; // adjust path if needed

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
  const isDeepScrolled = isScrolled && window.scrollY > 120;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const showCompactLogo = isScrolled || !isHomePage;

  const headerBg = () => {
    if (isMenuOpen && isHomePage) {
      return "bg-gradient-to-br from-emerald-700/30 via-teal-600/20 to-emerald-900/30 backdrop-blur-xl border-b border-white/10 shadow-2xl";
    }
    if (isScrolled || !isHomePage) {
      return "bg-white/90 backdrop-blur-lg shadow-md border-b border-emerald-100/50";
    }
    return "bg-transparent";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${headerBg()} ${
          isDeepScrolled ? "py-2" : isScrolled || !isHomePage ? "py-3" : "py-5 lg:py-7"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center justify-between relative z-20">
            {/* Logo with milk-pour inspired animation */}
            <Link
              to="/"
              className="flex items-center gap-3 group relative"
              onMouseEnter={() => {
                // Optional: could trigger sound or extra ripple if desired
              }}
            >
              {/* Main logo (full creative version) */}
              <div className="relative">
                <img
                  src="/logo1.png"
                  alt="Cow2Home - Vizhi's Dairy Farm"
                  className={`h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain transition-all duration-1000 ease-out origin-bottom ${
                    showCompactLogo
                      ? "opacity-0 scale-75 -translate-y-4"
                      : "opacity-100 scale-100 translate-y-0"
                  } group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] group-hover:scale-[1.05]`}
                />

                {/* Compact / scrolled version with subtle cow-spot overlay */}
                <img
                  src="/logo.png"
                  alt="Cow2Home - Vizhi's Dairy Farm"
                  className={`h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-1000 ease-out origin-bottom absolute top-1/2 left-0 -translate-y-1/2 ${
                    showCompactLogo
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-90 translate-y-6"
                  } group-hover:drop-shadow-[0_4px_14px_rgba(74,126,94,0.4)]`}
                />

                {/* Subtle milk ripple on hover (CSS only) */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/0 via-white/10 to-transparent opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150 transition-all duration-1000 pointer-events-none" />
              </div>

              {/* Optional brand wordmark beside logo on desktop */}
              {isScrolled && (
                <span className="hidden md:inline font-serif text-xl font-bold text-emerald-700 tracking-tight animate-fade-in">
                  Cow2Home
                </span>
              )}
            </Link>

            {/* Desktop Nav - elegant with milk-drop underline */}
            <ul className="hidden md:flex items-center gap-7 lg:gap-10">
              {navItems.map((item) => (
                <li key={item.href} className="relative group">
                  <Link
                    to={item.href}
                    className={`relative font-medium tracking-wide text-base transition-all duration-400 ${
                      location.pathname === item.href
                        ? "text-emerald-700 font-semibold"
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 rounded-full transition-all duration-500 ease-out ${
                        location.pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full origin-left"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTAs - elevated neumorphic style */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+918680050504"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-emerald-600/40 text-emerald-700 font-semibold text-sm shadow-[0_4px_14px_rgba(74,126,94,0.15)] hover:shadow-[0_8px_24px_rgba(74,126,94,0.25)] hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white transition-all duration-400 hover:-translate-y-1 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                to="/contact?sample=true"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm shadow-[0_6px_20px_rgba(74,126,94,0.3)] hover:shadow-[0_12px_32px_rgba(74,126,94,0.4)] hover:from-emerald-700 hover:to-teal-700 transition-all duration-400 hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <Gift className="w-4 h-4" />
                Get Sample
                <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Link>
            </div>

            {/* Mobile toggle - animated blob morph */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden relative p-3 rounded-full transition-all duration-500 z-30 ${
                isMenuOpen && isHomePage
                  ? "bg-white/20 backdrop-blur-lg text-white shadow-xl scale-110"
                  : "text-emerald-700 hover:bg-emerald-50/80"
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                {isMenuOpen ? (
                  <X className="w-8 h-8 transition-all duration-500 rotate-180 scale-110" />
                ) : (
                  <Menu className="w-8 h-8 transition-all duration-500" />
                )}
              </div>
            </button>
          </nav>

          {/* Mobile Menu - circular splash style on homepage */}
          {isMenuOpen && (
            <div
              className={`md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-10 transition-opacity duration-500 ${
                isHomePage ? "pt-24" : "pt-20"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div
                className={`mx-auto max-w-md w-[90%] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 origin-top ${
                  isHomePage
                    ? "bg-gradient-to-br from-emerald-800/90 via-teal-700/80 to-emerald-900/90 backdrop-blur-2xl border border-white/10 scale-95 opacity-0 animate-menu-pop"
                    : "bg-white/98 backdrop-blur-lg border border-emerald-100 scale-95 opacity-0 animate-menu-pop"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8 flex flex-col gap-3">
                  {navItems.map((item, i) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`block py-4 px-6 text-xl font-medium rounded-2xl transition-all duration-500 transform ${
                        location.pathname === item.href
                          ? isHomePage
                            ? "bg-white/15 text-white shadow-inner"
                            : "bg-emerald-50 text-emerald-800 font-bold"
                          : isHomePage
                          ? "text-white/90 hover:bg-white/10 hover:text-white hover:translate-x-3"
                          : "text-gray-800 hover:bg-emerald-50 hover:text-emerald-700 hover:translate-x-3"
                      }`}
                      style={{ transitionDelay: `${i * 60}ms` }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Floating mobile CTAs - neumorphic */}
      <div className="fixed bottom-6 left-4 right-4 md:hidden z-50 flex gap-4 justify-center pointer-events-none">
        <div className="flex gap-4 pointer-events-auto bg-white/90 backdrop-blur-lg p-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-emerald-100/50">
          <a
            href="tel:+918680050504"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-emerald-600 text-emerald-700 font-semibold shadow-md hover:bg-emerald-600 hover:text-white transition-all active:scale-95"
          >
            <Phone size={18} /> Call
          </a>
          <Link
            to="/contact?sample=true"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-md hover:brightness-110 hover:shadow-lg transition-all active:scale-95"
          >
            <Gift size={18} /> Sample
          </Link>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes menu-pop {
          from {
            opacity: 0;
            transform: scale(0.85) translateY(-40px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-menu-pop {
          animation: menu-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;