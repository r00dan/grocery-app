import { AddNewProductForm, ProductList } from '@/components';

import styles from './page.module.scss';
import { getAllProducts } from '@/api';

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main className={styles.main}>
      <ProductList
        products={products}
      />
      <AddNewProductForm />
    </main>
  )
}

