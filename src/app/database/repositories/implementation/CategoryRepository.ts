import { BaseRepository } from ".";
import { CategoryInput, CategoryOutput } from "@/shared/types/interfaces/Category";
import { Category } from "../../models";
import ICategoryRepository from "../ICategoryRepository";

class CategoryRepository 
    extends BaseRepository<CategoryInput, CategoryOutput> 
    implements ICategoryRepository {
        
    constructor() {
        super(Category);
    };
};

export default CategoryRepository;