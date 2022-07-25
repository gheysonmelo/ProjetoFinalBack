import BaseRepository from './BaseRepository';
import { Staff } from '@/app/database/models';
import IStaffRepository from '../IStaffRepository';
import { StaffInput, StaffOutput } from '@/shared/types/interfaces/Staff';

class StaffRepository extends BaseRepository<StaffInput, StaffOutput> implements IStaffRepository {
  constructor() {
    super(Staff);
  };
};

export default StaffRepository;