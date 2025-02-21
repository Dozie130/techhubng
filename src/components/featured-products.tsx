
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
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-tech-light mb-4">Featured Products</h2>
          <p className="text-tech-gray max-w-2xl mx-auto">
            Discover our handpicked selection of premium tech products, chosen for their innovation and exceptional quality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
