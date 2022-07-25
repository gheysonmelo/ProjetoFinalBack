import { Router } from "express";
import { AuthController } from "../controllers";
import { AuthSigValidation } from "../validations/AuthValidation"

const authRouter = Router();

const authController = new AuthController();

authRouter.post("/signup", AuthSigValidation, authController.signUp);

authRouter.post("/signin", AuthSigValidation, authController.signIn);

export default authRouter;