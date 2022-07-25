import { StoreInput, StoreOutput } from '@/shared/types/interfaces/Store';
import IBaseRepository from './IBaseRepository';

interface IStoreRepository extends IBaseRepository<StoreInput,StoreOutput> {}

export default IStoreRepository;
