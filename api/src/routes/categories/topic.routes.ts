import { topicValidations, commonValidations } from "../../validations";
import { topicControllers } from "../../controllers";
import { Router } from "express";

const categoryRoutes = Router();
categoryRoutes.post("/", topicValidations.createTopicValidations, topicControllers.createNewTopic);
categoryRoutes.delete("/:id", commonValidations.paramsValidations, topicControllers.deleteTopic);

export default categoryRoutes