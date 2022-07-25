import { Router } from 'express';
import { CustomerController } from '../controllers/';

const router = Router();
const customerController = new CustomerController();

router.get('/', customerController.getAll);

router.get('/:id', customerController.getById);

router.post('/', customerController.create);

router.put('/:id', customerController.updateById);

router.delete('/:id', customerController.deleteById);

export default router;