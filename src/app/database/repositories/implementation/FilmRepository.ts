import { Model } from "sequelize-typescript";
import { ResourceNotFoundError } from "@/shared/errors/";
import IBaseRepository from "../IBaseRepository";
import { BaseRepository } from ".";
import { FilmInput, FilmOutput } from "@/shared/types/interfaces/Film";
import { Film, Language } from "../../models";
import IFilmRepository from "../IFilmRepository";

class FilmRepository 
    extends BaseRepository<FilmInput, FilmOutput> 
    implements IFilmRepository {

    constructor() {
        super(Film);
    };

    // only for testes
    public async getAllWithLanguage(): Promise<FilmOutput[]> {
        // @ts-ignore
        return this.model.findAll({include: Language});
    };
};

export default FilmRepository;
