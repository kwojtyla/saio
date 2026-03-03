import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <Link href="/ofertas" className={buttonVariants({ variant: "default" })}>
        Ir para Ofertas
      </Link>
    </main>
  );
}
