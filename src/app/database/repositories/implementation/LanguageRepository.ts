import { BaseRepository } from ".";
import { LanguageInput, LanguageOutput } from "@/shared/types/interfaces/Language";
import { Language } from "../../models";
import ILanguageRepository from "../ILanguageRepository";

class LanguageRepository 
    extends BaseRepository<LanguageInput, LanguageOutput> 
    implements ILanguageRepository {
        
    constructor() {
        super(Language);
    };
};

export default LanguageRepository;