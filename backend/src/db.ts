import { DataSource } from 'typeorm';

import { Product } from './entities';

const entities = [Product];

export const database = new DataSource({
  type: 'sqlite',
  database: 'grocery-db',
  synchronize: true,
  entities,
});
