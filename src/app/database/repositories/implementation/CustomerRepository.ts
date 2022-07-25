import BaseRepository from './BaseRepository';
import { Customer } from '@/app/database/models';
import ICustomerRepository from '../ICustomerRepository';
import { CustomerInput, CustomerOutput } from '@/shared/types/interfaces/Customer';

class CustomerRepository extends BaseRepository<CustomerInput, CustomerOutput> implements ICustomerRepository {
  constructor() {
    super(Customer);
  };
};

export default CustomerRepository;