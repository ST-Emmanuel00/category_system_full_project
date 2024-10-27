import { db } from "../../config";
import { AsyncCustomResponse, createSubcategory } from "../../types";

export const addNewSubCategory = async (body: createSubcategory): AsyncCustomResponse => {
    try {

        const { name, description, categoryId } = body
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