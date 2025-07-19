import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Domain
import { Provider } from '@/modules/providers/domain/models/provider.model';
import { ProviderRepository } from '@/modules/providers/domain/repositories/provider.repository';

// Infrastructure
import { ProviderEntity } from '../entities/provider.entity';
import { ProviderMapper } from '../mappers/provider.mapper';

@Injectable()
export class ProviderRepositoryImpl implements ProviderRepository {
  public constructor(
    @InjectRepository(ProviderEntity)
    private readonly providerRepository: Repository<ProviderEntity>,
  ) {}

  public create(provider: Provider): Promise<Provider> {
    const entity = this.providerRepository.create(provider);

    return this.providerRepository.save(entity);
  }

  public async findById(id: string): Promise<Provider | null> {
    const entity = await this.providerRepository.findOne({ where: { id } });
    return entity ? ProviderMapper.toDomain(entity) : null;
  }

  public async findAll(): Promise<Provider[]> {
    const entities = await this.providerRepository.find();
    return entities.map((entity) => ProviderMapper.toDomain(entity));
  }
}
