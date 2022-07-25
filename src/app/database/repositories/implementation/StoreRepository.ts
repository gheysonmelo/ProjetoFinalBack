import BaseRepository from './BaseRepository';
import { Store } from '@/app/database/models';
import IStoreRepository from '../IStoreRepository';
import { StoreInput, StoreOutput } from '@/shared/types/interfaces/Store';

class StoreRepository extends BaseRepository<StoreInput, StoreOutput> implements IStoreRepository {
  constructor() {
    super(Store);
  };
};

export default StoreRepository;