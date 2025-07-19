// Core
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Utils
import { getEnv } from '@/common/utils/get-env.util';

// Entities
import { ProviderEntity } from '../providers/infrastructure/entities/provider.entity';

const env = getEnv();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.postgres.host,
      port: env.postgres.port,
      username: env.postgres.user,
      password: env.postgres.password,
      database: env.postgres.database,
      synchronize: true,
      entities: [ProviderEntity],
      logging: true,
    }),
  ],
})
export class TypeormModule {}
