// Core
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Infrastructure
import { ProviderEntity } from './infrastructure/entities/provider.entity';
import { ProviderRepositoryImpl } from './infrastructure/repositories/provider.repository.impl';

// Application
import { CreateProviderUseCase } from './application/use-cases/create-provider.use-case';
import { ProvidersService } from './application/services/providers.service';
import { FindByIdUseCase } from './application/use-cases/find-by-id.use-case';
import { FindByIdsUseCase } from './application/use-cases/find-by-ids.use-case';
import { FindAllUseCase } from './application/use-cases/find-all.use-case';

// Interfaces
import { ProvidersController } from './interfaces/controllers/providers.controller';

// Domain
import { PROVIDER_INJECTION_TOKEN } from './domain/constants/provider-injection-token.constant';

@Module({
  imports: [TypeOrmModule.forFeature([ProviderEntity])],
  controllers: [ProvidersController],
  providers: [
    ProviderRepositoryImpl,
    CreateProviderUseCase,
    FindByIdUseCase,
    FindByIdsUseCase,
    FindAllUseCase,
    ProvidersService,
    {
      provide: PROVIDER_INJECTION_TOKEN,
      useExisting: ProviderRepositoryImpl,
    },
  ],
})
export class ProviderModule {}
