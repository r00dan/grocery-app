import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('product')
export class Product {
  @PrimaryColumn()
  id!: string;
  
  @Column()
  title!: string;
}
