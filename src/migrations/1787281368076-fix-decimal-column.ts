import type { MigrationInterface, QueryRunner } from "typeorm";

export class FixDecimalColumn1787281368076 implements MigrationInterface {
    name = 'FixDecimalColumn1787281368076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "price" TYPE numeric(18,2)`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "compareAtPrice" TYPE numeric(18,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "compareAtPrice" TYPE numeric(2,0)`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "price" TYPE numeric(2,0)`);
    }

}
