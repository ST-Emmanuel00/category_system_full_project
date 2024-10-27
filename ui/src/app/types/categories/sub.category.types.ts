import { Category, CreateCategory } from "./category.types";
import { Topic } from "./topic.types";

export interface Subcategory {
    id: string; 
    name: string;
    description?: string;
    categoryId: string; 
    category?: Category; 
    topics?: Topic[];
    createdAt: Date;
    updatedAt: Date;
  }

export interface createSubcategory extends CreateCategory {

    categoryId: string
}

export type UpdateSubCategory = Partial<createSubcategory>;
