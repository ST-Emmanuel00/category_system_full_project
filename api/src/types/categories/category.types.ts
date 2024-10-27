export interface CreateCategory {

    name: string
    description?: string
    
}

export type UpdateCategory = Partial<CreateCategory>;
