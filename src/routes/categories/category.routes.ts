import { Router } from "express";
import { categoryControllers } from "../../controllers";

const categoryRoutes = Router();
categoryRoutes.get("/", categoryControllers.getAllCategories);
categoryRoutes.post("/", categoryControllers.createNewCategorie );
categoryRoutes.delete("/:id", categoryControllers.deleteCategory );

export default categoryRoutes