import BaseRepository from './BaseRepository';
import { Address, City, Country, Customer, Rental } from '@/app/database/models';
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
      include: [
        {model: Address, attributes: ['address','address2', 'district', 'postal_code', 'phone'], 
          include: {model: City, attributes: ['city'],
            include: {model: Country, attributes: ['country']}}
        },
        {model: Rental, attributes: ['rental_date','return_date']},
      ],
      attributes: ['customer_id', 'first_name', 'last_name', 'email', 'activebool'],
      ...pagination
    });
  };

};

export default CustomerRepository;