import { CountryInput, CountryOutput } from '@/shared/types/interfaces/Country';
import IBaseRepository from './IBaseRepository';

interface ICountryRepository extends IBaseRepository<CountryInput,CountryOutput> {}

export default ICountryRepository;
