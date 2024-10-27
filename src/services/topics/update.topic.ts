import { AppError } from "../../utils";
import { db } from "../../config";
import { AsyncCustomResponse, UpdateTopic } from "../../types";

export const updateTopic = async (id: string, body: UpdateTopic): AsyncCustomResponse => {
    try {

        const topic = await db.topic.findFirst({
            where: { id: id },
            include: {
                subcategory: {
                    select: {
                        name: true
                    }
                }
            }
        });


        if (!topic) {
            throw new AppError("Topic not found.", 404)
        }


        await db.topic.delete({
            where: { id: topic.id },
        })


        return { message: `Topic ${topic?.name} has been deleted.`, info: { topicDeleted: topic } };

    } catch (error) {
        console.error("Error:", error);
        throw error
    }

};