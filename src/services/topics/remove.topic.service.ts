import { name } from './../../../node_modules/ci-info/index.d';
import { db } from "../../config";
import { AsyncCustomResponse } from "../../types";
import { AppError } from "../../utils";

export const removeTopic = async (id: string): AsyncCustomResponse => {
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