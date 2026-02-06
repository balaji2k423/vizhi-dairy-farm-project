import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100/80 via-emerald-50/70 to-green-100/60 pt-20 pb-12">
      <div className="container-custom text-center">
        <div className="max-w-md mx-auto">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-serif font-bold text-emerald-700/20 mb-6">
            404
          </h1>
          
          {/* Message */}
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-emerald-800">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-lg"
            >
              <Home size={20} />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-emerald-600 text-emerald-700 rounded-full font-semibold hover:bg-emerald-50 transition-all text-lg"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;