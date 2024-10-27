import { ExpressController } from './common/express.cotroller.types';
import { CustomResponse, AsyncCustomResponse } from './common/response.types';
import { CreateCategory, UpdateCategory } from './categories/category.types';
import { createSubcategory, UpdateSubCategory } from './categories/sub.category.types';
import { createTopic, UpdateTopic } from './categories/topic.types';
export type { ExpressController, CustomResponse, AsyncCustomResponse, CreateCategory, createSubcategory, createTopic }
export type { UpdateCategory, UpdateSubCategory,UpdateTopic }