import { CityInput, CityOutput } from '@/shared/types/interfaces/City';
import IBaseRepository from './IBaseRepository';

interface ICityRepository extends IBaseRepository<CityInput,CityOutput> {}

export default ICityRepository;
