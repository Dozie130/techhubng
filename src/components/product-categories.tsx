
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CATEGORIES = [
  {
    id: 1,
    name: "Laptops",
    description: "High-performance laptops for work and play",
    image: "photo-1486312338219-ce68d2c6f44d",
    count: 24,
  },
  {
    id: 2,
    name: "Wearables",
    description: "Smart devices for an active lifestyle",
    image: "photo-1434494878577-86c23bcb06b9",
    count: 18,
  },
  {
    id: 3,
    name: "Drones",
    description: "Professional aerial photography equipment",
    image: "photo-1487887235947-a955ef187fcc",
    count: 12,
  },
  {
    id: 4,
    name: "Desktop Computers",
    description: "Powerful workstations and gaming rigs",
    image: "photo-1483058712412-4245e9b90334",
    count: 16,
  },
];

export const ProductCategories = () => {
  return (
    <section 
      className="py-24 bg-tech-dark"
      aria-labelledby="categories-heading"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            id="categories-heading"
            className="text-3xl md:text-4xl font-bold text-tech-light mb-6 animate-fadeIn [--animation-delay:200ms]"
          >
            Browse Categories
          </h2>
          <p className="text-tech-gray max-w-2xl mx-auto animate-fadeIn [--animation-delay:400ms]">
            Explore our wide range of technology products across different categories
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Product categories"
        >
          {CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg bg-tech-dark/50 border border-tech-gray/10 hover:border-tech-accent/50 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${(index + 3) * 200}ms` }}
              role="listitem"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=400&q=80`}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-tech-light mb-2 group-hover:text-tech-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-tech-gray mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-tech-accent">
                    {category.count} Products
                  </span>
                  <Button
                    variant="ghost"
                    className="text-tech-light hover:text-tech-accent hover:bg-transparent p-0 h-auto"
                    aria-label={`Browse ${category.name}`}
                  >
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
