import { db } from "../../config";
import { AsyncCustomResponse } from "../../types";
import { AppError } from "../../utils";

export const deleteEmptyCategory = async (id: string): AsyncCustomResponse => {
    try {

        const category = await db.category.findFirst({
            where: { id: id },
            include: { subcategories: true }
        })


        if (!category) {
            throw new AppError("Category not found.", 404)
        }

        console.log('lenght:', category.subcategories.length)
        if (category.subcategories.length > 0) {
            throw new AppError("Can't delete this category.", 400)
        }

        await db.category.delete({
            where: { id: category.id },
        })

        console.log({ message: `Category ${category?.name} has been deleted.`, info: { categoryDeleted: category } })

        return { message: `Category ${category?.name} has been deleted.`, info: { categoryDeleted: category } };

    } catch (error) {
        console.error("Error:", error);
        throw error
    }

};