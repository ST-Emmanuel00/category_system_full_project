import { body, param } from "express-validator";
import { validationResults } from "../../middlewares";

export const updateSubcategoryValidations = [


    body("categoryId")
        .optional()
        .matches(/^[0-9a-fA-F]{24}$/)
        .withMessage("The ID must be a valid MongoDB ObjectID"),

    body("name")
        .optional()
        .isString()
        .withMessage("The name must be a string")
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
