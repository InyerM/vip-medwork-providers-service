// Core
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

// Application
import { ProvidersService } from '@/modules/providers/application/services/providers.service';
import { CreateProviderDto } from '@/modules/providers/application/dto/create-provider.dto';

// Domain
import { Provider } from '@/modules/providers/domain/models/provider.model';

@Controller('providers')
export class ProvidersController {
  public constructor(private readonly providerService: ProvidersService) {}

  @MessagePattern('providers.create')
  public create(@Payload() dto: CreateProviderDto): Promise<Provider> {
    return this.providerService.create(dto);
  }

  @MessagePattern('providers.findById')
  public findById(@Payload() id: string): Promise<Provider | null> {
    return this.providerService.findById(id);
  }

  @MessagePattern('providers.findByIds')
  public findByIds(@Payload() ids: string[]): Promise<Provider[] | null> {
    return this.providerService.findByIds(ids);
  }

  @MessagePattern('providers.findAll')
  public findAll(): Promise<Provider[] | null> {
    return this.providerService.findAll();
  }
}
