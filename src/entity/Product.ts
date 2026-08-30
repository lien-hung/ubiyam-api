import { Column, Entity, OneToMany, OneToOne, type Relation } from "typeorm";
import { EntityBase } from "./EntityBase.ts";
import { ProductVariant } from "./ProductVariant.ts";

@Entity()
export class Product extends EntityBase {
  @Column("varchar", { length: 200 })
  title: string;

  @Column("varchar", { length: 200, unique: true })
  handle: string;

  @Column("decimal", { precision: 18, scale: 2 })
  price: number;

  @Column("decimal", { nullable: true, precision: 18, scale: 2 })
  compareAtPrice: number;

  @Column("varchar", { length: 10 })
  status: string;

  @Column("text", { nullable: true })
  tags: string;

  @Column("text", { nullable: true })
  image: string;

  @Column("text", { nullable: true })
  description: string;

  @OneToMany(() => ProductVariant, (variant) => variant.product)
  variants: Relation<ProductVariant[]>;
}