// Core
import { Inject, Injectable } from '@nestjs/common';

// Domain
import { ProviderRepository } from '@/modules/providers/domain/repositories/provider.repository';
import { Provider } from '@/modules/providers/domain/models/provider.model';
import { PROVIDER_INJECTION_TOKEN } from '@/modules/providers/domain/constants/provider-injection-token.constant';

// Application
import { CreateProviderDto } from '../dto/create-provider.dto';

// Infrastructure
import { ProviderMapper } from '@/modules/providers/infrastructure/mappers/provider.mapper';

@Injectable()
export class CreateProviderUseCase {
  public constructor(
    @Inject(PROVIDER_INJECTION_TOKEN) private readonly providerRepository: ProviderRepository,
  ) {}

  public async execute(input: CreateProviderDto): Promise<Provider> {
    const provider = ProviderMapper.toPersistence(input);

    return this.providerRepository.create(provider);
  }
}
