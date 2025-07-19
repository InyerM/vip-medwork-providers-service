// Core
import { Injectable } from '@nestjs/common';

// Application
import { CreateProviderUseCase } from '../use-cases/create-provider.use-case';
import { FindByIdUseCase } from '../use-cases/find-by-id.use-case';
import { FindByIdsUseCase } from '../use-cases/find-by-ids.use-case';
import { FindAllUseCase } from '../use-cases/find-all.use-case';
import { CreateProviderDto } from '../dto/create-provider.dto';

// Domain
import { Provider } from '../../domain/models/provider.model';

@Injectable()
export class ProvidersService {
  public constructor(
    private readonly createProviderUseCase: CreateProviderUseCase,
    private readonly findByIdUseCase: FindByIdUseCase,
    private readonly findByIdsUseCase: FindByIdsUseCase,
    private readonly findAllUseCase: FindAllUseCase,
  ) {}

  public create(dto: CreateProviderDto): Promise<Provider> {
    return this.createProviderUseCase.execute(dto);
  }

  public findById(id: string): Promise<Provider | null> {
    return this.findByIdUseCase.execute(id);
  }

  public findByIds(ids: string[]): Promise<Provider[] | null> {
    return this.findByIdsUseCase.execute(ids);
  }

  public findAll(): Promise<Provider[] | null> {
    return this.findAllUseCase.execute();
  }
}
