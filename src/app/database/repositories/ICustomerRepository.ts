import {CustomerInput,CustomerOutput } from '@/shared/types/interfaces/Customer';
import IBaseRepository from './IBaseRepository';

interface ICustomerRepository extends IBaseRepository<CustomerInput,CustomerOutput> {}

export default ICustomerRepository;