import BaseRepository from './BaseRepository';
import { Rental } from '@/app/database/models';
import IRentalRepository from '../IRentalRepository';
import { RentalInput, RentalOutput } from '@/shared/types/interfaces/Rental';

class RentalRepository extends BaseRepository<RentalInput, RentalOutput> implements IRentalRepository {
  constructor() {
    super(Rental);
  };
};

export default RentalRepository;