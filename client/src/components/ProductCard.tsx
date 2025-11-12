import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  condition: "Excellent" | "Good" | "Fair";
  category: string;
}

export default function ProductCard({ id, name, price, image, condition, category }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    console.log('Added to cart:', id);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Card className="group overflow-hidden transition-all hover-elevate" data-testid={`card-product-${id}`}>
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute right-2 top-2" variant="secondary">
          {condition}
        </Badge>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <p className="font-body text-xs uppercase tracking-wide text-muted-foreground">
            {category}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold leading-tight" data-testid={`text-product-name-${id}`}>
            {name}
          </h3>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-display text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>
            £{price.toLocaleString()}
          </span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={isAdding}
            data-testid={`button-add-cart-${id}`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {isAdding ? 'Added!' : 'Add'}
          </Button>
        </div>
      </div>
    </Card>
  );
}
