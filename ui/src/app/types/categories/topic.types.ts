import { CreateCategory } from "./category.types";
import { Subcategory } from "./sub.category.types";

  export interface Topic {
    id: string; 
    name: string;
    description?: string;
    subcategoryId: string; 
    subcategory?: Subcategory; 
    createdAt: Date;
    updatedAt: Date;
  }
export interface createTopic extends CreateCategory {

    subcategoryId: string
}
export type UpdateTopic = Partial<createTopic>;
