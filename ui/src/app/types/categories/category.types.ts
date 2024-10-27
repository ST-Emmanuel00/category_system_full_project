import { Subcategory } from "./sub.category.types";

export interface Category {
    id: string; 
    name: string;
    description?: string;
    subcategories?: Subcategory[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  
export interface CreateCategory {

    name: string
    description?: string
    
}

export type UpdateCategory = Partial<CreateCategory>;
