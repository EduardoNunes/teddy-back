import { SavedClient } from 'src/entities/savedClient.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  salary: number;

  @Column('int')
  enterprise: number;

  @OneToMany(() => SavedClient, (savedClient) => savedClient.client)
  savedClients: SavedClient[];
}
