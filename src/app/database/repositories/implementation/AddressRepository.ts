import BaseRepository from './BaseRepository';
import { Address } from '@/app/database/models';
import IAddressRepository from '../IAddressRepository';
import { AddressInput, AddressOutput } from '@/shared/types/interfaces/Address';

class AddressRepository extends BaseRepository<AddressInput, AddressOutput> implements IAddressRepository {
  constructor() {
    super(Address);
  };
};

export default AddressRepository;