import { PaymentInput, PaymentOutput } from '@/shared/types/interfaces/Payment';
import IBaseRepository from './IBaseRepository';

interface IPaymentRepository extends IBaseRepository<PaymentInput,PaymentOutput> {}

export default IPaymentRepository;
