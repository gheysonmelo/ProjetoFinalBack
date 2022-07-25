import { StaffInput, StaffOutput } from '@/shared/types/interfaces/Staff';
import IBaseRepository from './IBaseRepository';

interface IStaffRepository extends IBaseRepository<StaffInput,StaffOutput> {}

export default IStaffRepository;
