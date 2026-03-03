import { Product } from "@/types/products.type";
import { cacheLife } from "next/cache";
import { cacheTag } from "next/cache";

export async function getProducts(page = 1, perPage = 6, category?: string, priceRange?: string) {
  "use cache";
  cacheTag("products");
  cacheLife("hours");

  const response = await fetch(`${process.env.API_URL}/products`);
  if (!response.ok) throw new Error("Failed to fetch products");

  const all: Product[] = await response.json();

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
  "use cache";
  cacheTag(`product-${id}`);
  cacheLife("days");

  const response = await fetch(`${process.env.API_URL}/products/${id}`);
  if (!response.ok) throw new Error("Failed to fetch product");
  return response.json();
}
