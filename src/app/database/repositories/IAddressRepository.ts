import { AddressInput, AddressOutput } from '@/shared/types/interfaces/Address';
import IBaseRepository from './IBaseRepository';

interface IAddressRepository extends IBaseRepository<AddressInput,AddressOutput> {}

export default IAddressRepository;
