import { getAllProducts } from "@/api";
import { useQuery } from "@tanstack/react-query";

import { ProductDataType } from "shared-types";

export function useProductList() {
  const { data: products, isLoading } = useQuery<ProductDataType[]>({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  return {
    products,
    isLoading,
  };
}
