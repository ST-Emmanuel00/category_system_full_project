import { Router } from "express";
import categoryRoutes from "./categories/category.routes";
import subCategoryRoutes from "./categories/sub.category.routes";
import topicRoutes from "./categories/topic.routes";

const routes = Router();
// Auth or log in
routes.use("/categories", categoryRoutes);
routes.use("/sub-categories", subCategoryRoutes);
routes.use("/topics", topicRoutes);

export default routes