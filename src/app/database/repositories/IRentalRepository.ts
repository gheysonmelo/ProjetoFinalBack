import { RentalInput, RentalOutput } from '@/shared/types/interfaces/Rental';
import IBaseRepository from './IBaseRepository';

interface IRentalRepository extends IBaseRepository<RentalInput,RentalOutput> {}

export default IRentalRepository;