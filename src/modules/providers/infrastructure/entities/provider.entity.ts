import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('providers')
export class ProviderEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'full_name', type: 'varchar', length: 100 })
  public fullName: string;

  @Column({ name: 'specialty', type: 'varchar', length: 100 })
  public specialty: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  public createdAt: Date;
}
