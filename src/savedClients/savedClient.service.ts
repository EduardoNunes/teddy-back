import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SavedClient } from '../entities/savedClient.entity';
import { Client } from 'src/client/client.entity';

@Injectable()
export class SavedClientService {
  constructor(
    @InjectRepository(SavedClient)
    private readonly savedClientRepository: Repository<SavedClient>,

    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async addSavedClient(clientId: string): Promise<SavedClient> {
    const client = await this.clientRepository.findOne({
      where: { id: clientId },
    });
    if (!client) {
      throw new Error('Client not found');
    }

    const savedClient = new SavedClient();
    savedClient.client = client;

    return await this.savedClientRepository.save(savedClient);
  }

  async deleteSavedClient(savedClientId: number): Promise<void> {
    const savedClient = await this.savedClientRepository.findOne({
      where: { id: savedClientId },
    });
    if (!savedClient) {
      throw new Error('Saved client not found');
    }

    await this.savedClientRepository.remove(savedClient);
  }

  async getAllSavedClients(): Promise<SavedClient[]> {
    return this.savedClientRepository.find({
      relations: ['client'],
      select: {
        id: true,
        savedAt: true,
        client: {
          name: true,
          salary: true,
          enterprise: true,
        },
      },
    });
  }
}
