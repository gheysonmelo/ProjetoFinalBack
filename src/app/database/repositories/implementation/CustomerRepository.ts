import BaseRepository from './BaseRepository';
import { Customer } from '@/app/database/models';
import ICustomerRepository from '../ICustomerRepository';
import { CustomerInput, CustomerOutput } from '@/shared/types/interfaces/Customer';
import Query from '@/shared/types/interfaces/Query';
import { getPagination } from '@/utils/getPagination';

class CustomerRepository extends BaseRepository<CustomerInput, CustomerOutput> implements ICustomerRepository {
  constructor() {
    super(Customer);
  };

  public async getAll(query: Query, attributes?: string[]): Promise<CustomerOutput[]> {

    let { size, page, sort, order, ...filters } = query;

    const id = "customer_id";
    const { ...pagination } = getPagination(id, query);

    // @ts-ignore

    return this.model.findAndCountAll({
      where: {
        ...filters
      },
      attributes,
      ...pagination
    });
  };

};

export default CustomerRepository;