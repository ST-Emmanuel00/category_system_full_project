import { subCategoriesControllers } from "../../controllers";
import { Router } from "express";

const categoryRoutes = Router();
categoryRoutes.post("/", subCategoriesControllers.createNewSubcategory);
categoryRoutes.delete("/:id", subCategoriesControllers.deleteSubCategory );

export default categoryRoutes