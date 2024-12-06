import { Body, Controller, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() client: Client) {
    return await this.clientService.create(client);
  }
}
