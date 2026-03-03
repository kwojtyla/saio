import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Rating from "@/components/rating";
import { Product } from "@/types/products.type";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { formatToReal } from "@/lib/formatter";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group relative w-full cursor-pointer justify-between shadow-none transition-shadow duration-300 hover:shadow-lg">
      <div className="relative h-72 overflow-hidden p-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="relative z-20 object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <span className="text-muted-foreground text-sm font-medium">
          {product.category.toLocaleUpperCase()}
        </span>
        <CardTitle>{product.title}</CardTitle>
        <Rating rate={product.rating.rate} count={product.rating.count} />
      </CardHeader>
      <CardFooter className="flex">
        <span className="text-2xl font-bold">{formatToReal(product.price)}</span>
        <Button className="ml-auto">
          <ShoppingCart />
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
