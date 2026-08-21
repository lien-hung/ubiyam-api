import { Column, Entity, JoinColumn, ManyToOne, OneToOne, type Relation } from "typeorm";
import { EntityBase } from "./EntityBase.ts";
import { Bundle } from "./Bundle.ts";
import { Product } from "./Product.ts";

@Entity()
export class BundleGift extends EntityBase {
  @Column("varchar", { length: 50 })
  giftType: string;

  @Column("text", { nullable: true })
  text: string;

  @Column("int")
  quantity: number;

  @Column("bool")
  showPrice: boolean;

  @ManyToOne(() => Bundle, (bundle) => bundle.freeGifts)
  @JoinColumn()
  bundle: Relation<Bundle>;

  @OneToOne(() => Product, (product) => product.bundleGift)
  @JoinColumn()
  product: Relation<Product>;
}