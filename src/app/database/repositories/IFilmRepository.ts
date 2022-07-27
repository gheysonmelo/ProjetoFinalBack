import { FilmInput, FilmOutput } from '@/shared/types/interfaces/Film';
import Query from '@/shared/types/interfaces/Query';
import IBaseRepository from './IBaseRepository';

interface IFilmRepository extends IBaseRepository<FilmInput, FilmOutput> {
    getAll(query: Query, attributes?: string[]): Promise<FilmOutput[]>;

    getAllWithLanguage(): Promise<FilmOutput[]>;
};

export default IFilmRepository;