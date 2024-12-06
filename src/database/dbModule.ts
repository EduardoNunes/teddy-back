import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './typeorm.config.service';
import { Client } from 'src/client/client.entity';
import { SavedClient } from 'src/savedClients/savedClient.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    TypeOrmModule.forFeature([Client, SavedClient]),
  ],
  exports: [TypeOrmModule],
})
export class DbModule {}
