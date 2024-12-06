import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Client } from '../client/client.entity';

@Entity('saved_clients')
export class SavedClient {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, (client) => client.savedClients)
  client: Client;

  @CreateDateColumn({ name: 'saved_at' })
  savedAt: Date;
}
