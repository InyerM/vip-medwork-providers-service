// Domain
import type { Provider } from '@/modules/providers/domain/models/provider.model';

// Infrastructure
import { ProviderEntity } from '@/modules/providers/infrastructure/entities/provider.entity';

export class ProviderMapper {
  public static toDomain(entity: ProviderEntity): Provider {
    return {
      id: entity.id,
      fullName: entity.fullName,
      specialty: entity.specialty,
      createdAt: entity.createdAt,
    };
  }

  public static toPersistence(domain: Omit<Provider, 'id' | 'createdAt'>): ProviderEntity {
    const entity = new ProviderEntity();
    entity.fullName = domain.fullName;
    entity.specialty = domain.specialty;
    return entity;
  }
}
