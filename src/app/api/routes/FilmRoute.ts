import { Router } from "express";
import { FilmController } from "../controllers";

const filmRouter = Router();

const filmController = new FilmController();

filmRouter.get("/", filmController.getAll);
filmRouter.get("/relations", filmController.getAllWithRelations);
filmRouter.get("/language", filmController.getAllWithLanguage);
filmRouter.get("/:id", filmController.getById);

filmRouter.post("/", filmController.create);

filmRouter.put("/:id", filmController.updateById);

filmRouter.delete("/:id", filmController.deleteById);

export default filmRouter;