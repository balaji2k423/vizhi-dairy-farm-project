import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="product-card group">
      {/* Image Container – taller aspect for bottles */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream rounded-t-xl"> {/* ← changed to aspect-[3/4] or try aspect-[4/5] */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105" // ← object-contain + padding
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-serif font-semibold text-xl mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg font-semibold text-primary">
            {product.price}
          </span>
          <button className="text-sm font-medium text-primary hover:text-sage-dark transition-colors flex items-center gap-2">
            View Details
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;