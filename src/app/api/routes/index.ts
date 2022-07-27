import { Router } from "express";
import rentalController  from "./RentalRoute";
import { ensureIsAuthenticated } from "../middlewares/AuthMiddleware";
import authRouter from "./AuthRoute";
import customerController from "./CustomerRoute"

const router = Router();

router.use('/auth', authRouter);
router.use(ensureIsAuthenticated);
router.use('/customers', customerController);
router.use('/rentals', rentalController);
// router.use('/films', filmController);


export default router;