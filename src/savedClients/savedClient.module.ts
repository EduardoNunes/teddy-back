import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SavedClient } from './savedClient.entity';
import { Client } from 'src/client/client.entity';
import { SavedClientService } from './savedClient.service';
import { SavedClientController } from './savedClient.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SavedClient, Client])],
  providers: [SavedClientService],
  controllers: [SavedClientController],
})
export class SavedClientModule {}
