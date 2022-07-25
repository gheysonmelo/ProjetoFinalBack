import BaseRepository from './BaseRepository';
import { Country } from '@/app/database/models';
import ICountryRepository from '../ICountryRepository';
import { CountryInput, CountryOutput } from '@/shared/types/interfaces/Country';

class CountryRepository extends BaseRepository<CountryInput, CountryOutput> implements ICountryRepository {
  constructor() {
    super(Country);
  };
};

export default CountryRepository;