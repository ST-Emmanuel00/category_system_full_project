import { subCategoriesValidations, commonValidations } from "../../validations";
import { subCategoriesControllers } from "../../controllers";
import { Router } from "express";

const categoryRoutes = Router();
categoryRoutes.post("/", subCategoriesValidations.createSubcategoryValidations, subCategoriesControllers.createNewSubcategory);
categoryRoutes.delete("/:id", commonValidations.paramsValidations, subCategoriesControllers.deleteSubCategory);
categoryRoutes.put("/:id", commonValidations.paramsValidations, subCategoriesValidations.updateSubcategoryValidations, subCategoriesControllers.updateSubCategory);

export default categoryRoutes