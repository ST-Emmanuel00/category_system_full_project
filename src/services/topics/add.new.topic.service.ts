import { db } from "../../config";
import { AsyncCustomResponse, createTopic,  } from "../../types";

export const addNewTopic = async (body: createTopic): AsyncCustomResponse => {
    try {
        const { name, description, subcategoryId } = body
        const newTopic = await db.topic.create({
            data: {
                subcategoryId: subcategoryId,
                name: name,
                description: description
            },
            include: {
                subcategory: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return { message: `Topic ${newTopic.name} created.`, info: { newTopic } };
    } catch (error) {
        console.error("Error:", error);
        throw error
    }

};