import { categories, priceRanges } from "@/config/constants";
import FiltersClient from "./filters-client";

export default function Filters() {
  return <FiltersClient categories={categories} priceRanges={priceRanges} />;
}
