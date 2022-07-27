import { inject, injectable } from 'tsyringe';
import  { ICustomerRepository } from '../../database/repositories/';
import { CustomerInput, CustomerOutput } from '@/shared/types/interfaces/Customer'
import { Model } from 'sequelize-typescript';
import Query from '@/shared/types/interfaces/Query';

@injectable()
class CustomerService {
    constructor(
        @inject("CustomerRepository")
        private readonly CustomerRepository: ICustomerRepository
    ) {}       
           
    public getAll = async (query: Query): Promise<CustomerOutput[]> => {
        return await this.CustomerRepository.getAll(query);
    };

    public getById = async (id: number): Promise<CustomerOutput> => {
        return await  this.CustomerRepository.getById(id);
    };

    public create = async (payload: CustomerInput): Promise<Model> => {
        return await this.CustomerRepository.create(payload)
    };

    public updateById = async (id: number, payload: CustomerInput): Promise<CustomerOutput> => {
        return await this.CustomerRepository.updateById(id, payload);
    };

    public deleteById = async (id: number): Promise<boolean> => {
        return await this.CustomerRepository.deleteById(id);
    };
};

export default CustomerService;
