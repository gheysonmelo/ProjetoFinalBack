import { BaseRepository } from ".";
import { ActorInput, ActorOutput } from "@/shared/types/interfaces/Actor";
import { Actor } from "../../models";
import IActorRepository from "../IActorRepository";

class ActorRepository 
    extends BaseRepository<ActorInput, ActorOutput> 
    implements IActorRepository {
        
    constructor() {
        super(Actor);
    };
};

export default ActorRepository;