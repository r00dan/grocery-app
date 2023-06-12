'use client';

import { AddNewProductForm, FetchFailed, ProductList } from '@/components';
import { useProducts } from './useProducts';

export function Products() {
  const {
    newProductValue,
    products,
    isProductsLoading,
    isError,
    isAddButtonDisabled,
    handleNewInputValueChange,
    handleAddProductClick,
    handleRemoveProduct,
  } = useProducts();

  if (isError) {
    return <FetchFailed />
  }

  return (
    <>
      <AddNewProductForm
        value={newProductValue}
        isDisabled={isAddButtonDisabled}
        onChange={handleNewInputValueChange}
        onAddNewProductClick={handleAddProductClick}
      />
      <ProductList
        products={products}
        isLoading={isProductsLoading}
        onRemoveProductClick={handleRemoveProduct}
      />
    </>
  )
}
