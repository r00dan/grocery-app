import { DataSource } from 'typeorm';

import { Product } from './entities';

const entities = [Product];

export const database = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT ?? 5432),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  migrationsTableName: 'migration',
  migrations: ['src/migration/*.ts'],
  synchronize: true,
  entities,
});
