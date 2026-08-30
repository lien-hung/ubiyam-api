import { Column, Entity, ManyToOne, type Relation } from "typeorm";
import { EntityBase } from "./EntityBase.ts";
import { Product } from "./Product.ts";

@Entity()
export class ProductVariant extends EntityBase {
  @Column("varchar", { length: 200 })
  label: string;

  @Column("decimal", { precision: 18, scale: 2 })
  price: number;

  @Column("decimal", { nullable: true, precision: 18, scale: 2 })
  compareAtPrice: number;
  
  @ManyToOne(() => Product, (product) => product.variants)
  product: Relation<Product>;
}