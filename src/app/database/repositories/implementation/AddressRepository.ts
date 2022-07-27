import BaseRepository from './BaseRepository';
import { Address, City } from '@/app/database/models';
import IAddressRepository from '../IAddressRepository';
import { AddressInput, AddressOutput } from '@/shared/types/interfaces/Address';
import Query from '@/shared/types/interfaces/Query';

class AddressRepository extends BaseRepository<AddressInput, AddressOutput> implements IAddressRepository {
  constructor() {
    super(Address);
  };

  public async getAll(query: Query, attributes?: string[]): Promise<AddressOutput[]> {

    // @ts-ignore

    return this.model.findAndCountAll({

      include: {all: true} ,
      attributes: ['address','address2', 'district', 'postal_code', 'phone'],

    });
  };

};

export default AddressRepository;