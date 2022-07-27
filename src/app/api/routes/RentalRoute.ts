import { Router } from 'express';
import { RentalController } from '../controllers/';
import { CreateRentalValidation, UpdateRentalValidation } from '../validations/RentalValidation';

const router = Router();
const rentalController = new RentalController();

router.get('/', rentalController.getAll);

router.get('/:id', rentalController.getById);

router.post('/', CreateRentalValidation ,rentalController.create);

router.put('/:id', UpdateRentalValidation ,rentalController.updateById);

router.delete('/:id', rentalController.deleteById);

export default router;