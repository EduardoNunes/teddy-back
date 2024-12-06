import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { SavedClientService } from './savedClient.service';
import { SavedClient } from '../entities/savedClient.entity';

@Controller('saved-clients')
export class SavedClientController {
  constructor(private readonly savedClientService: SavedClientService) {}

  @Post('add')
  async addSavedClient(
    @Body('clientId') clientId: string,
  ): Promise<SavedClient> {
    return this.savedClientService.addSavedClient(clientId);
  }

  @Delete('delete/:id')
  async deleteSavedClient(@Param('id') id: number): Promise<void> {
    return this.savedClientService.deleteSavedClient(id);
  }

  @Get()
  async getAllSavedClients(): Promise<SavedClient[]> {
    return this.savedClientService.getAllSavedClients();
  }
}
