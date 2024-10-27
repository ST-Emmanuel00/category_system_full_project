import { CreateCategory } from "./category.types";

export interface createSubcategory extends CreateCategory {

    categoryId: string
}

export type UpdateSubCategory = Partial<createSubcategory>;
