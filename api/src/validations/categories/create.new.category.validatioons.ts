import { body } from "express-validator";
import { validationResults } from "../../middlewares";

export const createCategoryValidations = [
    body("name")

        .isString()
        .withMessage("The name must be a string")
        .notEmpty()
        .withMessage("The name is required")
        .isLength({ min: 3, max: 50 })
        .withMessage("The name must be between 3 and 50 characters"),

    body("description")
        .optional()
        .isString()
        .withMessage("The description must be a string")
        .isLength({ max: 200 })
        .withMessage("The description must not exceed 200 characters"),

    validationResults
];
