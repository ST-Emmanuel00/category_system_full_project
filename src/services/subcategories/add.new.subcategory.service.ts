import { db } from "../../config";
import { AsyncCustomResponse, createSubcategory } from "../../types";
import { AppError } from 'utils';

export const addNewSubCategory = async (body: createSubcategory): AsyncCustomResponse => {
    try {

        const { name, description, categoryId } = body

        const category = await db.category.findFirst({ where: { id: categoryId } })

        if (!category) {
            throw new AppError("Category not found.", 404)
        }
        const newSubCategory = await db.subcategory.create({
            data: {
                categoryId: categoryId,
                name: name,
                description: description
            }
        })
        return { message: `Sub Category ${newSubCategory.name} created.`, info: { newSubCategory } };
    } catch (error) {
        console.error("Error:", error);
        throw error
    }

};