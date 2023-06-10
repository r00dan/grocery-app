import { Product } from '@/components';

import style from './ProductList.module.scss';

export function ProductList() {
  return (
    <div className={style.root}>
      <Product
        index={1}
        title='Test product'
      />
      <Product
        index={2}
        title='Test product 2'
      />
    </div>
  )
}
