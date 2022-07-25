import { FilmInput, FilmOutput } from '@/shared/types/interfaces/Film';
import IBaseRepository from './IBaseRepository';

interface IFilmRepository extends IBaseRepository<FilmInput, FilmOutput> {
    getAllWithLanguage(): Promise<FilmOutput[]>;
};

export default IFilmRepository;