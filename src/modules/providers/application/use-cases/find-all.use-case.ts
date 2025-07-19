// Core
import { Inject, Injectable } from '@nestjs/common';

// Domain
import { ProviderRepository } from '@/modules/providers/domain/repositories/provider.repository';
import { Provider } from '@/modules/providers/domain/models/provider.model';
import { PROVIDER_INJECTION_TOKEN } from '@/modules/providers/domain/constants/provider-injection-token.constant';

@Injectable()
export class FindAllUseCase {
  public constructor(
    @Inject(PROVIDER_INJECTION_TOKEN) private readonly providerRepository: ProviderRepository,
  ) {}

  public async execute(): Promise<Provider[]> {
    return this.providerRepository.findAll();
  }
}
