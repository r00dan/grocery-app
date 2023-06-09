import { ProductList, SearchInput } from '@/components';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductList />
      <SearchInput
        placeholder='Search for a product...'
      />
    </main>
  )
}
