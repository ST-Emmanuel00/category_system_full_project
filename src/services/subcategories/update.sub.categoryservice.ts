import { Subcategory } from './../../../node_modules/.prisma/client/index.d';
import { db } from "../../config";
import { AsyncCustomResponse, UpdateSubCategory } from "../../types";
import { AppError } from "../../utils";

export const updateSubCategory = async (id: string, body: UpdateSubCategory): AsyncCustomResponse => {
    try {

        const { name, description } = body
        const subCategory = await db.subcategory.findFirst({
            where: { id: id },
            include: { topics: true }
        })

        if (!subCategory) {
            throw new AppError("Sub category not found.", 404)
        }


        const subCategoryUpdated = await db.subcategory.update({
            where: { id: subCategory.id },
            data: {
                name: name,
                description: description
            }
        })


        return { message: `Sub category ${subCategory?.name} has been updated.`, info: { subCategoryUpdated } };

    } catch (error) {
        console.error("Error:", error);
        throw error
    }

};