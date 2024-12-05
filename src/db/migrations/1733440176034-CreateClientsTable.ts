import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateClientsTable1733437919967 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      	CREATE TABLE clients (
    				id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    				name varchar(255) NOT NULL,
    				salary int NOT NULL,
    				enterprise int NOT NULL
				);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS clients;');
  }
}
