import type { Provider } from '../models/provider.model';

export interface ProviderRepository {
  create(provider: Provider): Promise<Provider>;
  findById(id: string): Promise<Provider | null>;
  findAll(): Promise<Provider[]>;
  findByIds(ids: string[]): Promise<Provider[]>;
}
