'use client';

import { AddNewProductForm, ProductList } from '@/components';
import { useProducts } from './useProducts';

export function Products() {
  const {
    newProductValue,
    products,
    isProductsLoading,
    isAddButtonDisabled,
    handleNewInputValueChange,
    handleAddProductClick,
    handleRemoveProduct,
  } = useProducts();
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
