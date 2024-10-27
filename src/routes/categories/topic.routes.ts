import { topicControllers } from "../../controllers";
import { Router } from "express";

const categoryRoutes = Router();
categoryRoutes.post("/", topicControllers.createNewTopic);
categoryRoutes.delete("/:id", topicControllers.deleteTopic );

export default categoryRoutes