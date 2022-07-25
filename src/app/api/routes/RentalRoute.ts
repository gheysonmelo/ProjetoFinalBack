import { Router } from 'express';
import { RentalController } from '../controllers/';

const router = Router();
const rentalController = new RentalController();

router.get('/', rentalController.getAll);

router.get('/:id', rentalController.getById);

router.post('/', rentalController.create);

router.put('/:id', rentalController.updateById);

router.delete('/:id', rentalController.deleteById);

export default router;