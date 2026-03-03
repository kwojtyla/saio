import { Product } from "@/types/products.type";
import { mockProducts } from "./mock-products";

export async function getProducts(page = 1, perPage = 6, category?: string, priceRange?: string) {
  const all: Product[] = mockProducts;

  let filtered = all;

  if (category) {
    filtered = filtered.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (priceRange) {
    if (priceRange.endsWith("+")) {
      const min = Number(priceRange.replace("+", ""));
      filtered = filtered.filter((product) => product.price >= min);
    } else {
      const [minStr, maxStr] = priceRange.split("-");
      const min = Number(minStr);
      const max = Number(maxStr);
      filtered = filtered.filter((product) => product.price >= min && product.price <= max);
    }
  }

  const start = (page - 1) * perPage;
  const data = filtered.slice(start, start + perPage);

  return {
    data,
    total: filtered.length,
    totalPages: Math.ceil(filtered.length / perPage),
    page,
    perPage,
  };
}

export async function getProduct(id: number): Promise<Product> {
  const product = mockProducts.find((p) => p.id === id);

  if (!product) throw new Error(`Product with id ${id} not found`);

  return product;
}
