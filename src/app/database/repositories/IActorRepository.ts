import { ActorInput, ActorOutput } from '@/shared/types/interfaces/Actor';
import IBaseRepository from './IBaseRepository';

interface IActorRepository extends IBaseRepository<ActorInput, ActorOutput> {};

export default IActorRepository;