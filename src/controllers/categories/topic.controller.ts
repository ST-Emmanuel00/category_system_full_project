import { topicServices } from "../../services";
import { ExpressController } from "../../types";

export const createNewTopic: ExpressController = async (req, res, next) => {
    try {
        const body = req.body
        res.status(201).json(await topicServices.addNewTopic(body));
    } catch (error: any) {
        next(error)
    }
};

export const deleteTopic: ExpressController = async (req, res, next) => {
    try {
        const { id } = req.params
        res.status(201).json(await topicServices.removeTopic(id));
    } catch (error: any) {
        next(error)
    }
};