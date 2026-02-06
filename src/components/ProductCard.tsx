import { Link } from "react-router-dom";
import type { Product } from "@/types";
import { Eye, Clock } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isComingSoon = product.badge === "Coming Soon";
  
  // Navigation logic: If coming soon (including curd), go to coming-soon section
  // Otherwise go to milk-range section
  const getProductLink = () => {
    if (isComingSoon) {
      return "/products#coming-soon";
    }
    return "/products#milk-range";
  };

  return (
    <article className="bg-emerald-50/40 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 group relative border border-emerald-200/50">
      {/* Badge */}
      <div className={`absolute top-4 right-4 z-10 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 ${
        isComingSoon 
          ? "bg-amber-500 text-white"
          : "bg-emerald-700 text-white"
      }`}>
        {isComingSoon && <Clock className="w-3 h-3" />}
        {product.badge}
      </div>

      {/* Image Container */}
      <div className={`relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-emerald-100/60 to-emerald-50/40 flex items-center justify-center p-8 ${
        isComingSoon ? "opacity-60" : ""
      }`}>
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        {!isComingSoon && (
          <div className="absolute inset-0 bg-emerald-700/0 group-hover:bg-emerald-700/5 transition-colors duration-500" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-sm font-medium text-emerald-700 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-serif font-semibold text-2xl mt-2 mb-3 text-emerald-900 group-hover:text-emerald-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-emerald-800/70 text-sm leading-relaxed mb-6 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-emerald-200/50">
          <span className="text-xl font-semibold text-emerald-900">
            {product.price}
          </span>
          
          <Link
            to={getProductLink()}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              isComingSoon
                ? "bg-emerald-200/50 text-emerald-900 hover:bg-emerald-300/50"
                : "bg-emerald-700 text-white hover:bg-emerald-800"
            }`}
          >
            <Eye className="w-4 h-4" />
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;