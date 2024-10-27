import { db } from "../../config";
import { AsyncCustomResponse } from "../../types";
import { AppError } from "../../utils";

export const removeSubCategory = async (id: string): AsyncCustomResponse => {
    try {

        const subCategory = await db.subcategory.findFirst({
            where: { id: id },
            include: { topics: true }
        })

        if (!subCategory) {
            throw new AppError("Sub category not found.", 404)
        }

        if (subCategory.topics.length > 0) {
            throw new AppError("Can't delete this sub category.", 400)
        }

        await db.subcategory.delete({
            where: { id: subCategory.id },
        })


        return { message: `Sub category ${subCategory?.name} has been deleted.`, info: { subCategoryDeleted: subCategory } };

    } catch (error) {
        console.error("Error:", error);
        throw error
    }

};