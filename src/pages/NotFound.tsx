import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft pt-20">
      <div className="container-custom text-center">
        <div className="max-w-md mx-auto">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-serif font-bold text-primary/20 mb-4">
            404
          </h1>
          
          {/* Message */}
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="btn-hero flex items-center gap-2"
            >
              <Home size={18} />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-hero-outline border-primary text-primary hover:bg-primary/5 flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
