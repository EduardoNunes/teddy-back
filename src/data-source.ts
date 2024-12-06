import { DataSource } from 'typeorm';
import { Client } from './client/client.entity';
import { SavedClient } from './entities/savedClient.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Client, SavedClient],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
