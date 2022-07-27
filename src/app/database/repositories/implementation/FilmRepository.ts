import { Model } from "sequelize-typescript";
import { ResourceNotFoundError } from "@/shared/errors/";
import IBaseRepository from "../IBaseRepository";
import { BaseRepository } from ".";
import { FilmInput, FilmOutput } from "@/shared/types/interfaces/Film";
import { Actor, Category, Film, FilmCategory, Language } from "../../models";
import IFilmRepository from "../IFilmRepository";
import Query from "@/shared/types/interfaces/Query";
import { getPagination } from "@/utils/getPagination";

class FilmRepository 
    extends BaseRepository<FilmInput, FilmOutput> 
    implements IFilmRepository {

    constructor() {
        super(Film);
    };

    public async getAll(query: Query, attributes?: string[]): Promise <FilmOutput[]> {
        let {size, page, sort, order, ...filters} = query;
        
        const id = "film_id";
        const {...pagination} = getPagination(id, query);
        
        // @ts-ignore

        return this.model.findAndCountAll({
            where: {
                ...filters
            },
            include: [
                {model: Language, attributes: ["name"]},
                {model: Category, attributes: ["name"]},
                {model: Actor, attributes: ["first_name", "last_name"]}

            ],
            attributes: ["title", "description", "release_year", "rental_rate", "length", "replacement_cost"],
            ...pagination 
        });
    };

    // only for testes
    public async getAllWithLanguage(): Promise<FilmOutput[]> {
        // @ts-ignore
        return this.model.findAll({include: Language});
    };
};

export default FilmRepository;
