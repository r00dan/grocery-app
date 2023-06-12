'use client';

import { Divider } from '@mui/material';

import { Product } from '@/components';
import { ProductDataType } from '@/constants/types';

import style from './ProductList.module.scss';

interface ProductListProps {
  products?: ProductDataType[];
  isLoading: boolean;
  onRemoveProductClick(id: string): void;
}

export function ProductList({
  products,
  isLoading,
  onRemoveProductClick,
}: ProductListProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.root}>
      <Divider />
      {products && products.map(({ id, ...product }) => (
        <Product
          key={id}
          id={id}
          onRemoveClick={onRemoveProductClick}
          {...product}
        />
      ))}
      {!products?.length && (
        <div>There is no products, add some with the form below.</div>
      )}
    </div>
  )
}
