import { LanguageInput, LanguageOutput } from '@/shared/types/interfaces/Language';
import IBaseRepository from './IBaseRepository';

interface ILanguageRepository extends IBaseRepository<LanguageInput, LanguageOutput> {};

export default ILanguageRepository;