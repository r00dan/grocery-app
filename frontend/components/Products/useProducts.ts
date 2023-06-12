import { ChangeEvent, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

import { createProduct, deleteProduct, getAllProducts } from '@/api';
import { ProductDataType } from '@/app/types';

export function useProducts() {
  const [newProductValue, setNewProductValue] = useState<string>('');

  const {
    data: products,
    isLoading: isProductsLoading,
    error: getProductsFetchError,
    refetch: refetchProducts,
  } = useQuery<ProductDataType[]>({
    queryKey: ['products'],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false,
    retry: false,
  });
  
  const {
    mutate: createProductMutation,
    error: createProductFetchError,
  } = useMutation(createProduct, {
    onSuccess: () => {
      setNewProductValue('');
      refetchProducts();
    },
  });

  const {
    mutate: deleteProductMutation,
    error: deleteProductFetchError,
  } = useMutation(deleteProduct, {
    onSettled: () => {
      refetchProducts();
    },
  });

  const handleAddProductClick = () => createProductMutation(newProductValue);
  const handleRemoveProduct = (id: string) => deleteProductMutation(id);
  const handleNewInputValueChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setNewProductValue(value);

  const isError =
    !!getProductsFetchError ||
    !!deleteProductFetchError ||
    !!createProductFetchError;

  return {
    newProductValue,
    products,
    isProductsLoading,
    isError,
    isAddButtonDisabled: !newProductValue.trim().length,
    handleAddProductClick,
    handleNewInputValueChange,
    handleRemoveProduct,
  };
}
