import { Column, Entity, JoinColumn, ManyToOne, OneToMany, type Relation } from "typeorm";
import { EntityBase } from "./EntityBase.ts";
import { Product } from "./Product.ts";
import { BundleGift } from "./BundleGift.ts";

@Entity()
export class Bundle extends EntityBase {
  @Column("varchar", { length: 200 })
  title: string;

  @Column("text", { nullable: true })
  subtitle: string;

  @Column("varchar", { length: 50, nullable: true })
  badgeText: string;

  @Column("text", { nullable: true })
  imageUrl: string;

  @Column("int")
  buyQuantity: number;

  @Column("int")
  getQuantity: number;

  @ManyToOne(() => Product, (product) => product.bundles)
  @JoinColumn()
  product: Relation<Product>;

  @OneToMany(() => BundleGift, (gift) => gift.bundle)
  freeGifts: Relation<BundleGift[]>;
}