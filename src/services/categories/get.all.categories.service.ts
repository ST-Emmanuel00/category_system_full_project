import { db } from "../../config";
import { AsyncCustomResponse } from "../../types";

export const getAllCategories = async (): AsyncCustomResponse => {
    try {
        const categories = await db.category.findMany({
            include: {
                subcategories: {
                    include: {
                        topics: true
                    }
                }
            }
        });
        return { message: "Gel all categories.", info: {count: categories.length, categories} };
    } catch (error) {
        console.error("Error:", error);
        throw error
    }
};