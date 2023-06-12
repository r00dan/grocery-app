'use client';

import { Product } from '@/components';
import { useProductList } from './useProductList';

import style from './ProductList.module.scss';


export function ProductList() {
  const {
    products,
    isLoading,
  } = useProductList();

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className={style.root}>
      {!!products?.length ? (
        products.map(({ id, ...product }) => (
          <Product
            key={id}
            id={id}
            {...product}
          />
        ))
      ) : (
        <div>There is no products, add some with the form below.</div>
      )}
    </div>
  )
}
