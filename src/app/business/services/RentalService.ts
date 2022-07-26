import { inject, injectable } from 'tsyringe';
import  { IRentalRepository } from '../../database/repositories/';
import { RentalInput, RentalOutput } from '@/shared/types/interfaces/Rental'
import { Model } from 'sequelize-typescript';
import Query from '@/shared/types/interfaces/Query';

@injectable()
    class RentalService {
        constructor(
            @inject("RentalRepository")
            private readonly RentalRepository: IRentalRepository
        ) {}       
        
        
public getAll = async (query: Query): Promise<RentalOutput[]> => {
    return await this.RentalRepository.getAll(query);
};

public getById = async (id: number): Promise<RentalOutput> => {
    return await  this.RentalRepository.getById(id);
};

public create = async (payload: RentalInput): Promise<Model> => {
    return await this.RentalRepository.create(payload)
};

public updateById = async (id: number, payload: RentalInput): Promise<RentalOutput> => {
    return await this.RentalRepository.updateById(id, payload);
};

public deleteById = async (id: number): Promise<boolean> => {
    return await this.RentalRepository.deleteById(id);
};

}

export default RentalService;
//VAI CHAMAR O REPOSITORIO DE Rental O DE ADDRES, O DE COUNTRY E O DE CITY
