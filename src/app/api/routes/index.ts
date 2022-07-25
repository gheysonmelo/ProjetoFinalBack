import { Router } from "express";
import authRouter from "./AuthRoute";
import filmRouter from "./FilmRoute";

const router = Router();

router.use('/auth', authRouter);
router.use('/film', filmRouter);

export default router;