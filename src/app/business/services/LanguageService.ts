import { inject, injectable } from "tsyringe";
import { ILanguageRepository } from "../../database/repositories";
import { LanguageInput, LanguageOutput } from "@/shared/types/interfaces/Language";
import { Model } from "sequelize-typescript";

@injectable()
class LanguageService {
    constructor(
        @inject("LanguageRepository")
        private readonly LanguageRepository: ILanguageRepository
    ) {};

    public getAll = async (attributes?: string[]): Promise<LanguageOutput[]> => {
        return await this.LanguageRepository.getAll(attributes);
    };

    public getById = async (id: number, attributes?: string[]): Promise<LanguageOutput> => {
        return await this.LanguageRepository.getById(id, attributes);
    };
    
    public create = async (payload: LanguageInput): Promise<Model> => {
        return await this.LanguageRepository.create(payload);
    };

    public updateById = async (id: number, payload: LanguageInput): Promise<LanguageOutput> => {
        return await this.LanguageRepository.updateById(id, payload);
    };

    public deleteById = async (id: number): Promise<boolean> => {
        return await this.LanguageRepository.deleteById(id);
    };
};

export default LanguageService;