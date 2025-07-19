// Core
import { Module } from '@nestjs/common';
import { RouterModule as NRouterModule } from '@nestjs/core';

// Modules
import { HealthModule } from '@/modules/health/health.module';
import { ProviderModule } from '@/modules/providers/provider.module';

@Module({
  imports: [
    HealthModule,
    ProviderModule,
    NRouterModule.register([
      {
        path: '/health',
        module: HealthModule,
      },
    ]),
  ],
})
export class RouterModule {}
