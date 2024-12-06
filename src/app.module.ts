import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { DbModule } from './database/dbModule';
import { SavedClientModule } from './savedClients/savedClient.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DbModule,
    ClientModule,
    SavedClientModule,
  ],
})
export class AppModule {}
