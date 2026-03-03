import { cn } from "@/lib/utils";
import Image from "next/image";

interface BannerProps {
  src: string;
  alt: string;
}

export default function Banner({ src, alt }: BannerProps) {
  return (
    <section className="relative aspect-video h-96 w-full overflow-hidden">
      <Image src={src} alt={alt} fill className="w-full object-cover" />
    </section>
  );
}
