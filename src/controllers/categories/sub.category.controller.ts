import { subCategoriesServices } from "../../services";
import { ExpressController } from "../../types";

export const createNewSubcategory: ExpressController = async (req, res, next) => {
    try {
        const body = req.body
        res.status(201).json(await subCategoriesServices.addNewSubCategory(body));
    } catch (error: any) {
        next(error)
    }
};


export const deleteSubCategory: ExpressController = async (req, res, next) => {
    try {
        const { id } = req.params
        res.status(200).json(await subCategoriesServices.removeSubCategory(id));
    } catch (error: any) {
        next(error)
    }
};

export const updateSubCategory: ExpressController = async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        res.status(200).json(await subCategoriesServices.updateSubCategory(id, body));
    } catch (error: any) {
        next(error)
    }
};
