import { getProducts } from "@/api/products";
import Banner from "@/components/banner";
import Filters from "@/components/filters";
import ProductsGrid from "@/components/products-grid";
import ProductsPagination from "@/components/products-pagination";

interface OfertasProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
    priceRange?: string;
  }>;
}

export default async function Ofertas({ searchParams }: OfertasProps) {
  const { page, category, priceRange } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);
  const products = await getProducts(currentPage, 6, category, priceRange);
  const hasProducts = products.data.length > 0;

  return (
    <main>
      <Banner src="/banner.png" alt="Banner promocional"></Banner>
      <section className="mx-auto flex flex-col gap-2 px-4 py-8 xl:max-w-9/12">
        <h2 className="text-3xl font-bold">Ofertas da Semana</h2>
        <p>Aproveite descontos incríveis em produtos selecionados. Ofertas por tempo limitado!</p>

        <Filters />
        {!hasProducts ? (
          <div className="mt-8 rounded-md bg-yellow-50 p-4">
            <div className="flex">
              <p className="text-lg font-semibold">Nenhum produto encontrado.</p>
            </div>
          </div>
        ) : (
          <>
            <ProductsGrid products={products.data} />
            <ProductsPagination totalPages={products.totalPages} currentPage={products.page} />
          </>
        )}
      </section>
    </main>
  );
}
