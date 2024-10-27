import { categoriesServices } from "../../services";
import { ExpressController } from "../../types";


export const getAllCategories: ExpressController = async (req, res, next) => {
    try {

        res.status(200).json(await categoriesServices.getAllCategories());
    } catch (error: any) {
        next(error)
    }
};

export const createNewCategorie: ExpressController = async (req, res, next) => {
    try {
        const body = req.body
        res.status(201).json(await categoriesServices.createCategory(body));
    } catch (error: any) {
        next(error)
    }
};

export const deleteCategory: ExpressController = async (req, res, next) => {
    try {
        const { id } = req.params

        res.status(200).json(await categoriesServices.deleteEmptyCategory(id));
    } catch (error: any) {
        next(error)
    }
};

export const updateCategory: ExpressController = async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        res.status(200).json(await categoriesServices.updateCategory(id, body));
    } catch (error: any) {
        next(error)
    }
};