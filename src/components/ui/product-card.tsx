
import { Card } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { ShoppingCart, Star } from "lucide-react";

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
    <Card className="group overflow-hidden bg-tech-dark/50 backdrop-blur-sm border border-tech-gray/10 hover:border-tech-accent/50 transition-all duration-300 animate-float">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-tech-accent text-tech-black">
            New
          </Badge>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs text-tech-gray mb-2">{category}</div>
        <h3 className="font-medium text-tech-light mb-2 truncate">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-tech-accent mr-1" />
            <span className="text-sm text-tech-light">{rating}</span>
          </div>
          <span className="text-tech-accent font-semibold">${price}</span>
        </div>
        <Button className="w-full bg-tech-accent text-tech-black hover:bg-tech-accent/90" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
