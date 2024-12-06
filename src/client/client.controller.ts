import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() client: Client) {
    return await this.clientService.create(client);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() client: Client) {
    return await this.clientService.update(id, client);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.clientService.delete(id);
  }

  @Get()
  async findAllPaginated(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return await this.clientService.findAllPaginated(page, limit);
  }
}
