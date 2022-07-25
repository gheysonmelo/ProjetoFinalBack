import { Router } from "express";
import { ensureIsAuthenticated } from "../middlewares/AuthMiddleware";
import authRouter from "./AuthRoute";
import customerController from "./CustomerRoute"

const router = Router();

router.use('/auth', authRouter);
router.use(ensureIsAuthenticated);
router.use('/customers', customerController);

export default router;