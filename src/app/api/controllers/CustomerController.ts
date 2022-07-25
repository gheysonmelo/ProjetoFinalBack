import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CustomerService } from '../../business/services';

class CustomerController {

    public async getAll(req: Request, res:Response): Promise<void> {
        
        const customerService = container.resolve(CustomerService);
        const result = await customerService.getAll();
        
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