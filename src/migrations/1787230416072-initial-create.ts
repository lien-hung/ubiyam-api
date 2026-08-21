import type { MigrationInterface, QueryRunner } from "typeorm";

export class InitialCreate1787230416072 implements MigrationInterface {
    name = 'InitialCreate1787230416072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bundle_gift" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "modifiedAt" TIMESTAMP NOT NULL DEFAULT now(), "giftType" character varying(50) NOT NULL, "text" text, "quantity" integer NOT NULL, "showPrice" boolean NOT NULL, "bundleId" integer, "productId" integer, CONSTRAINT "REL_ecb660190d37d84469c28d996f" UNIQUE ("productId"), CONSTRAINT "PK_231e946cc2467664a4420194bfc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "modifiedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(200) NOT NULL, "handle" character varying(200) NOT NULL, "price" numeric(2) NOT NULL, "compareAtPrice" numeric(2), "status" character varying(10) NOT NULL, "image" text, "description" text, CONSTRAINT "UQ_db7355f7bd36c547c8a4f539e57" UNIQUE ("handle"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bundle" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "modifiedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(200) NOT NULL, "subtitle" text, "badgeText" character varying(50), "imageUrl" text, "buyQuantity" integer NOT NULL, "getQuantity" integer NOT NULL, "productId" integer, CONSTRAINT "PK_637e3f87e837d6532109c198dea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bundle_gift" ADD CONSTRAINT "FK_6960ebb2b57a085383d176c180d" FOREIGN KEY ("bundleId") REFERENCES "bundle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bundle_gift" ADD CONSTRAINT "FK_ecb660190d37d84469c28d996fb" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bundle" ADD CONSTRAINT "FK_2cbec38a7c81c633783510ffa12" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bundle" DROP CONSTRAINT "FK_2cbec38a7c81c633783510ffa12"`);
        await queryRunner.query(`ALTER TABLE "bundle_gift" DROP CONSTRAINT "FK_ecb660190d37d84469c28d996fb"`);
        await queryRunner.query(`ALTER TABLE "bundle_gift" DROP CONSTRAINT "FK_6960ebb2b57a085383d176c180d"`);
        await queryRunner.query(`DROP TABLE "bundle"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "bundle_gift"`);
    }

}
