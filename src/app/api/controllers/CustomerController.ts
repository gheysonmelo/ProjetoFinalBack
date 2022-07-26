import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CustomerService } from '../../business/services';
import Query from '@/shared/types/interfaces/Query';

class CustomerController {

    public async getAll(req: Request, res:Response): Promise<void> {

        const { size, page, sort, order, ...filters } = req.query;

        const query: Query = {
            size: parseInt(req.query.size as string),
            page: parseInt(req.query.page as string),
            sort: req.query.sort as string,
            order: req.query.order as string,
            ...filters
        };

        const customerService = container.resolve(CustomerService);
        const result = await customerService.getAll(query);

        res.status(200).send(result);
    };

    public async getById(req: Request, res:Response): Promise<void> {

        const customerService = container.resolve(CustomerService);
        const result = await customerService.getById(parseInt(req.params.id));

        res.status(200).send(result);
    };

    public async create(req: Request, res:Response): Promise<void> {

        const customerService = container.resolve(CustomerService);
        const result = await customerService.create(req.body);

        res.status(201).send(result);
    };
    
    public async updateById(req: Request, res:Response): Promise<void> {
        
        const customerService = container.resolve(CustomerService);
        const result = await customerService.updateById(parseInt(req.params.id), req.body);
        
        res.status(201).send(result);
    };

    public async deleteById(req: Request, res:Response): Promise<void> {
        
        const customerService = container.resolve(CustomerService);
        const result = await customerService.deleteById(parseInt(req.params.id));
        
        res.status(204).send(result);
    };
};



export default CustomerController;