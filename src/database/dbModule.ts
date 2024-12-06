import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/client/client.entity';
import { TypeOrmConfigService } from './typeorm.config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    TypeOrmModule.forFeature([Client]),
  ],
  exports: [TypeOrmModule],
})
export class DbModule {}
