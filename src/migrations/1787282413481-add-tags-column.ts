import type { MigrationInterface, QueryRunner } from "typeorm";

export class AddTagsColumn1787282413481 implements MigrationInterface {
    name = 'AddTagsColumn1787282413481'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "tags" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "tags"`);
    }

}
