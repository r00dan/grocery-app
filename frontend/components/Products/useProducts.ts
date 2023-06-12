import { useMutation, useQuery } from "@tanstack/react-query";

import { createProduct, deleteProduct, getAllProducts } from "@/api";
import { ProductDataType } from "shared-types";
import { ChangeEvent, useState } from "react";

export function useProducts() {
  const [newProductValue, setNewProductValue] = useState<string>('');

  const {
    data: products,
    isLoading: isProductsLoading,
    refetch: refetchProducts,
  } = useQuery<ProductDataType[]>({
    queryKey: ['products'],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false,
  });
  
  const { mutate: createProductMutation } = useMutation(createProduct, {
    onSuccess: () => {
      setNewProductValue('');
      refetchProducts();
    },
  });

  const { mutate: deleteProductMutation } = useMutation(deleteProduct, {
    onSettled: () => {
      refetchProducts();
    },
  });

  const handleAddProductClick = () => createProductMutation(newProductValue);
  const handleRemoveProduct = (id: string) => deleteProductMutation(id);
  const handleNewInputValueChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setNewProductValue(value);

  return {
    newProductValue,
    products,
    isProductsLoading,
    isAddButtonDisabled: !newProductValue.trim().length,
    handleAddProductClick,
    handleNewInputValueChange,
    handleRemoveProduct,
  };
}
