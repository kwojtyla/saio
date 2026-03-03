import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface RatingProps {
  rate: number;
  count: number;
  maxStars?: number;
}

export default function Rating({ rate, count, maxStars = 5 }: RatingProps) {
  const filledStars = Math.floor(rate);

  return (
    <div className="flex items-center gap-1">
      <div className="flex" aria-label={`${rate} out of ${maxStars} stars`}>
        {Array.from({ length: maxStars }, (_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < filledStars ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
            )}
          />
        ))}
      </div>
      <span className="text-muted-foreground text-sm">({count})</span>
    </div>
  );
}
