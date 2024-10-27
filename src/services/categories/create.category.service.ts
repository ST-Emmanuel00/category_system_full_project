import { db } from "../../config";
import { AsyncCustomResponse, CreateCategory } from "../../types";

export const createCategory = async (body: CreateCategory): AsyncCustomResponse => {
    try {

        const { name, description } = body
        const newCategory = await db.category.create({
            data: {
                name: name,
                description: description
            }
        })
        return { message: `Category ${newCategory.name} created.`, info: { newCategory } };
    } catch (error) {
        console.error("Error:", error);
        throw error
    }

};