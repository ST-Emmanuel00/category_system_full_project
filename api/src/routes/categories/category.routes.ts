import { Router } from "express";
import { categoryControllers } from "../../controllers";
import { categoriesValidations, commonValidations } from "../../validations";

const categoryRoutes = Router();
categoryRoutes.get("/", categoryControllers.getAllCategories);
categoryRoutes.post("/", categoriesValidations.createCategoryValidations, categoryControllers.createNewCategorie);
categoryRoutes.delete("/:id", commonValidations.paramsValidations, categoryControllers.deleteCategory);
categoryRoutes.put("/:id", commonValidations.paramsValidations, categoriesValidations.updateCategoryValidations, categoryControllers.updateCategory);

export default categoryRoutes