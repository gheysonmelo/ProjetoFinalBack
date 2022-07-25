import { 
    ICategoryRepository, 
    IFilmRepository, 
    ILanguageRepository, 
    IUserRepository 
} from '@/app/database/repositories';

import { 
    CategoryRepository, 
    FilmRepository, 
    LanguageRepository, 
    UserRepository 
} from '@/app/database/repositories/implementation';

import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IFilmRepository>("FilmRepository", FilmRepository);
container.registerSingleton<ILanguageRepository>("LanguageRepository", LanguageRepository);
container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository);