import BaseRepository from './BaseRepository';
import { Customer, Payment, Rental, Staff } from '@/app/database/models';
import IRentalRepository from '../IRentalRepository';
import { RentalInput, RentalOutput } from '@/shared/types/interfaces/Rental';
import Query from '@/shared/types/interfaces/Query';
import { getPagination } from '@/utils/getPagination';

class RentalRepository extends BaseRepository<RentalInput, RentalOutput> implements IRentalRepository {
  constructor() {
    super(Rental);
  };

  public async getAll(query: Query, attributes?: string[]): Promise<RentalOutput[]> {

    let { size, page, sort, order, ...filters } = query;

    const id = "rental_id";
    const { ...pagination } = getPagination(id, query);
    // @ts-ignore
    return this.model.findAndCountAll({
      where: {
        ...filters
      },
      include: [
        {model: Payment, attributes: ['customer_id', 'payment_date', 'amount' ], 
          include: {model: Staff, attributes: ['first_name', 'last_name', 'active']}
        },
        {model: Customer, attributes: ['first_name','last_name', 'active']},
      ],
      attributes: ['rental_id', 'rental_date', 'return_date'],
      ...pagination
    });
  };

};

export default RentalRepository;