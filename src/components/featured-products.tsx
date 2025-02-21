
import { ProductCard } from "./ui/product-card";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: "Latest MacBook Pro",
    price: 1999.99,
    image: "photo-1486312338219-ce68d2c6f44d",
    category: "Laptops",
    rating: 4.9,
    isNew: true,
  },
  {
    id: 2,
    title: "Smart Watch Series 7",
    price: 399.99,
    image: "photo-1434494878577-86c23bcb06b9",
    category: "Wearables",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Professional Drone",
    price: 799.99,
    image: "photo-1487887235947-a955ef187fcc",
    category: "Drones",
    rating: 4.8,
    isNew: true,
  },
  {
    id: 4,
    title: "iMac 27-inch",
    price: 1799.99,
    image: "photo-1483058712412-4245e9b90334",
    category: "Desktops",
    rating: 4.9,
  },
];

export const FeaturedProducts = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-tech-dark to-tech-dark/95"
      aria-labelledby="featured-products-title"
    >
      {/* Enhanced Background Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(74,222,128,0.02)_50%,transparent_75%)] bg-[length:500px_500px] animate-float opacity-50"
        aria-hidden="true"
      ></div>

      <div className="container relative">
        <div className="text-center mb-16">
          <h2 
            id="featured-products-title"
            className="text-3xl md:text-4xl font-bold text-tech-light mb-6 animate-fadeIn [--animation-delay:200ms]"
          >
            Featured Products
          </h2>
          <p className="text-tech-gray max-w-2xl mx-auto animate-fadeIn [--animation-delay:400ms]">
            Discover our handpicked selection of premium tech products, chosen for their innovation and exceptional quality.
          </p>
        </div>
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn [--animation-delay:600ms]"
          role="list"
          aria-label="Featured products grid"
        >
          {FEATURED_PRODUCTS.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${(index + 3) * 200}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
