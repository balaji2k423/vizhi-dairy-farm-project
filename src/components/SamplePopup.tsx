// src/components/SamplePopup.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const SamplePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem("samplePopupShown");
    
    if (!popupShown) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("samplePopupShown", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 pointer-events-auto animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Icon/Image - Optional */}
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">🥛</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Try Our Fresh Dairy!
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Experience the pure taste of farm-fresh dairy products. Get a free sample delivered to your doorstep!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Link
                to="/contact?sample=true"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold text-base shadow-lg hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                onClick={handleClose}
              >
                Get Free Sample
              </Link>
              
              <button
                onClick={handleClose}
                className="w-full px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium text-base hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SamplePopup;