import { param } from "express-validator";
import { validationResults } from "../../middlewares";

export const paramsValidations = [
    param("id")
        .matches(/^[0-9a-fA-F]{24}$/)
        .withMessage("The ID must be a valid MongoDB ObjectID"),
    validationResults
];