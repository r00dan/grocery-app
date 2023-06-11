import { Product } from '@/components';

import style from './ProductList.module.scss';
import { ProductDataType } from '../../../shared/types';

interface ProductListProps {
  products: ProductDataType[];
}

export function ProductList({
  products,
}: ProductListProps) {
  return (
    <div className={style.root}>
      {!products.length && (
        <div>There is no products, add some with the form below.</div>
      )}
      {products.map(({ id, title }, index) => (
        <Product
          key={id}
          id={id}
          index={index + 1}
          title={title}
        />
      ))}
    </div>
  )
}
