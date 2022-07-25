import BaseRepository from './BaseRepository';
import { Payment } from '@/app/database/models';
import IPaymentRepository from '../IPaymentRepository';
import { PaymentInput, PaymentOutput } from '@/shared/types/interfaces/Payment';

class PaymentRepository extends BaseRepository<PaymentInput, PaymentOutput> implements IPaymentRepository {
  constructor() {
    super(Payment);
  };
};

export default PaymentRepository;