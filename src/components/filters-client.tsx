"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Filter, X } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

interface FiltersClientProps {
  categories: FilterOption[];
  priceRanges: FilterOption[];
}

export default function FiltersClient({ categories, priceRanges }: FiltersClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") ?? "";
  const currentPriceRange = searchParams.get("priceRange") ?? "";
  const hasActiveFilters = !!currentCategory || !!currentPriceRange;

  function updateParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    // Reset para a página 1 ao mudar filtros
    params.delete("page");
    router.push(`?${params.toString()}`);
  }

  function clearFilters() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");
    params.delete("priceRange");
    params.delete("page");
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex w-full flex-col items-start gap-2 md:flex-row md:items-center">
      <div className="flex items-center gap-1">
        <Filter size={12} className="text-muted-foreground" />
        <span className="text-muted-foreground py-1.5 text-sm">Filtros</span>
      </div>

      <Select value={currentCategory} onValueChange={(value) => updateParams("category", value)}>
        <SelectTrigger className="w-full md:max-w-48">
          <SelectValue placeholder="Categorias" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categoria</SelectLabel>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        value={currentPriceRange}
        onValueChange={(value) => updateParams("priceRange", value)}
      >
        <SelectTrigger className="w-full md:max-w-48">
          <SelectValue placeholder="Faixa de Preço" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Faixa de Preço</SelectLabel>
            {priceRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-muted-foreground hover:text-foreground gap-1"
        >
          <X size={14} />
          Limpar filtros
        </Button>
      )}
    </div>
  );
}
