
import { Card } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
}

export const ProductCard = ({ title, price, image, category, rating, isNew }: ProductCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-tech-dark/50 backdrop-blur-sm border border-tech-gray/10 hover:border-tech-accent/50 hover:shadow-lg hover:shadow-tech-accent/5 transition-all duration-300"
      role="article"
      aria-label={`${title} product card`}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=400&q=80`}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {isNew && (
          <Badge 
            className="absolute top-3 right-3 bg-tech-accent text-tech-black animate-float"
            aria-label="New product"
          >
            New
          </Badge>
        )}
      </div>
      <div className="p-6">
        <div 
          className="text-xs text-tech-gray mb-2 group-hover:text-tech-accent transition-colors" 
          aria-label="Product category"
        >
          {category}
        </div>
        <h3 className="font-medium text-tech-light mb-3 truncate group-hover:text-tech-accent transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between mb-6">
          <div 
            className="flex items-center gap-2" 
            aria-label={`Rating: ${rating} out of 5`}
          >
            <Star 
              className="h-4 w-4 text-tech-accent group-hover:scale-110 transition-transform" 
              aria-hidden="true" 
            />
            <span className="text-sm text-tech-light">{rating}</span>
          </div>
          <span 
            className="text-tech-accent font-semibold text-lg" 
            aria-label={`Price: $${price}`}
          >
            ${price.toFixed(2)}
          </span>
        </div>
        <Button 
          className="w-full bg-tech-accent text-tech-black hover:bg-tech-accent/90 focus:ring-2 focus:ring-tech-accent/50 transition-transform active:scale-95"
          size="sm"
          aria-label={`Add ${title} to cart`}
        >
          <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" aria-hidden="true" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
