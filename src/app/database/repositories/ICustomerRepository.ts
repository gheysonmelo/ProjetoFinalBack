import {CustomerInput,CustomerOutput } from '@/shared/types/interfaces/Customer';
import Query from '@/shared/types/interfaces/Query';
import IBaseRepository from './IBaseRepository';

interface ICustomerRepository extends IBaseRepository<CustomerInput,CustomerOutput> {

    
    getAll(query: Query, attributes?: string[]): Promise<CustomerOutput[]>;
}

export default ICustomerRepository;