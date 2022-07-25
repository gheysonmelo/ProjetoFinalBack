import BaseRepository from './BaseRepository';
import { Inventory } from '@/app/database/models';
import IInventoryRepository from '../IInventoryRepository';
import { InventoryInput, InventoryOutput } from '@/shared/types/interfaces/Inventory';

class InventoryRepository extends BaseRepository<InventoryInput, InventoryOutput> implements IInventoryRepository {
  constructor() {
    super(Inventory);
  };
};

export default InventoryRepository;