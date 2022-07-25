import { InventoryInput, InventoryOutput } from '@/shared/types/interfaces/Inventory';
import IBaseRepository from './IBaseRepository';

interface IInventoryRepository extends IBaseRepository<InventoryInput,InventoryOutput> {}

export default IInventoryRepository;