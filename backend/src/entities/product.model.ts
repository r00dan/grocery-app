import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum ProductStatuses {
  UNDONE = 'undone',
  DONE = 'done',
}

@Entity('product')
export class Product {
  @PrimaryColumn()
  id!: string;
  
  @Column()
  title!: string;

  @Column({ default: 1 })
  count!: number;

  @Column({ default: ProductStatuses.UNDONE })
  status!: ProductStatuses;
}
