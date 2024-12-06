import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async create(client: Client): Promise<Client> {
    return this.clientRepository.save(client);
  }

  async update(id: string, client: Client): Promise<Client> {
    const existingClient = await this.clientRepository.findOne({
      where: { id },
    });

    if (!existingClient) {
      throw new Error('Client not found');
    }

    existingClient.name = client.name;
    existingClient.salary = client.salary;
    existingClient.enterprise = client.enterprise;

    return this.clientRepository.save(existingClient);
  }

  async delete(id: string): Promise<void> {
    const client = await this.clientRepository.findOne({
      where: { id },
    });

    if (!client) {
      throw new Error('Client not found');
    }

    await this.clientRepository.remove(client);
  }

  async findAllPaginated(
    page: number,
    limit: number,
  ): Promise<{ data: Client[]; total: number }> {
    const [data, total] = await this.clientRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return { data, total };
  }
}
