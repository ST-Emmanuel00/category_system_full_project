import { db } from "../../config";
import { AsyncCustomResponse, UpdateCategory } from "../../types";
import { AppError } from "../../utils";

export const updateCategory = async (id: string, body: UpdateCategory): AsyncCustomResponse => {
    try {

        const { name, description } = body
        const category = await db.category.findFirst({
            where: { id: id },
            include: { subcategories: true }
        })

        if (!category) {
            throw new AppError("Category not found.", 404)
        }


        const categoryUpdated= await db.category.update({
            where: { id: category.id },
            data: {
                name: name,
                description: description
            }
        })


        return { message: `Category ${category?.name} has been updated.`, info: { categoryUpdated } };

    } catch (error) {
        console.error("Error:", error);
        throw error
    }

};