import { CategoryInput, CategoryOutput } from '@/shared/types/interfaces/Category';
import IBaseRepository from './IBaseRepository';

interface ICategoryRepository extends IBaseRepository<CategoryInput, CategoryOutput> {};

export default ICategoryRepository;