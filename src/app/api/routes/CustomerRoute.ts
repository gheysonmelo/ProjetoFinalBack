import { Router } from 'express';
import { CustomerController } from '../controllers/';
import { CreateCustomerValidation, UpdateCustomerValidation } from '../validations/CustomerValidation';

const router = Router();
const customerController = new CustomerController();

router.get('/', customerController.getAll);

router.get('/:id', customerController.getById);

router.post('/', CreateCustomerValidation,customerController.create);

router.put('/:id', UpdateCustomerValidation, customerController.updateById);

router.delete('/:id', customerController.deleteById);

export default router;