import { CreateCategory } from "./category.types";

export interface createTopic extends CreateCategory {

    subcategoryId: string
}
export type UpdateTopic = Partial<createTopic>;
