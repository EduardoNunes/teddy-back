import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Client } from 'src/client/client.entity';
import { config } from 'dotenv';
import { SavedClient } from 'src/savedClients/savedClient.entity';

config();

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Client, SavedClient],
      synchronize: false,
      migrations: ['dist/database/migrations/*.js'],
    };
  }
}
