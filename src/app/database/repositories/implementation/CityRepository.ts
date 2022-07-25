import BaseRepository from './BaseRepository';
import { City } from '@/app/database/models';
import ICityRepository from '../ICityRepository';
import { CityInput, CityOutput } from '@/shared/types/interfaces/City';

class CityRepository extends BaseRepository<CityInput, CityOutput> implements ICityRepository {
  constructor() {
    super(City);
  };
};

export default CityRepository;