import { inject, injectable } from "tsyringe";
import { IFilmRepository } from "../../database/repositories";
import { FilmInput, FilmOutput } from "@/shared/types/interfaces/Film";
import { Model } from "sequelize-typescript";
import Query from "@/shared/types/interfaces/Query";

@injectable()
class FilmService {
    constructor(
        @inject("FilmRepository")
        private readonly FilmRepository: IFilmRepository
    ) {};

    public getAll = async (query: Query): Promise<FilmOutput[]> => {
        return await this.FilmRepository.getAll(query);
    };

    public getAllWithRelations = async (): Promise<FilmOutput[]> => {
        return await this.FilmRepository.getAllWithRelations();
    };
    
    public getAllWithLanguage = async (): Promise<FilmOutput[]> => {
        return await this.FilmRepository.getAllWithLanguage();
    };

    public getById = async (id: number, attributes?: string[]): Promise<FilmOutput> => {
        return await this.FilmRepository.getById(id, attributes);
    };
    
    public create = async (payload: FilmInput): Promise<Model> => {
        return await this.FilmRepository.create(payload);
    };

    public updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
        return await this.FilmRepository.updateById(id, payload);
    };

    public deleteById = async (id: number): Promise<boolean> => {
        return await this.FilmRepository.deleteById(id);
    };
};

export default FilmService;