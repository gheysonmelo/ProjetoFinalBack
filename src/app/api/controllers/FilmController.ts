import { container } from 'tsyringe';
import { FilmService } from '@/app/business/services';
import { Request, Response } from 'express';
import Query from '@/shared/types/interfaces/Query';

class FilmController {
    public async getAll(req: Request, res: Response): Promise<void> {
        
        const {size, page, sort, order, ...filters} = req.query;
        const query: Query = {
            size: parseInt(req.query.size as string),
            page: parseInt(req.query.page as string),
            sort: req.query.sort as string,
            order: req.query.order as string,
            ...filters
        };

        const filmService = container.resolve(FilmService);
        const result = await filmService.getAll(query);

        res.status(200).send(result);
    };

    public async getAllWithRelations(req: Request, res: Response): Promise<void> {
        const filmService = container.resolve(FilmService);
        const result = await filmService.getAllWithRelations();

        res.status(200).send(result);
    };

    public async getAllWithLanguage(req: Request, res: Response): Promise<void> {
        const filmService = container.resolve(FilmService);
        const result = await filmService.getAllWithLanguage();

        res.status(200).send(result);
    };

    public async getById(req: Request, res: Response): Promise<void> {
        const filmService = container.resolve(FilmService);
        const result = await filmService.getById(parseInt(req.params.id), req.body);

        res.status(200).send(result);
    };

    public async create(req: Request, res: Response): Promise<void> {
        const filmService = container.resolve(FilmService);
        const result = await filmService.create(req.body);

        res.status(201).send(result);
    };

    public async updateById(req: Request, res: Response): Promise<void> {
        const filmService = container.resolve(FilmService);
        const result = await filmService.updateById(parseInt(req.params.id), req.body);

        res.status(201).send(result);
    };

    public async deleteById(req: Request, res: Response): Promise<void> {
        const filmService = container.resolve(FilmService);
        const result = await filmService.deleteById(parseInt(req.params.id));

        res.status(204).send(result);
    };
};

export default FilmController;