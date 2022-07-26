import Query from '@/shared/types/interfaces/Query';
import { RentalInput, RentalOutput } from '@/shared/types/interfaces/Rental';
import IBaseRepository from './IBaseRepository';

interface IRentalRepository extends IBaseRepository<RentalInput,RentalOutput> {

    
    getAll(query: Query, attributes?: string[]): Promise<RentalOutput[]>;
}

export default IRentalRepository;