// seed.ts
import { categories } from "./data";
import { connectDB, db } from '../src/config';


async function main() {

    await connectDB()
    await db.topic.deleteMany();
    await db.subcategory.deleteMany();
    await db.category.deleteMany();

    // Inserta los nuevos datos
    for (const categoryData of categories) {
        const { subcategories, ...categoryInfo } = categoryData;
        const createdCategory = await db.category.create({
            data: {
                ...categoryInfo,
                subcategories: {
                    create: subcategories.map((subcategoryData) => {
                        const { topics, ...subcategoryInfo } = subcategoryData;
                        return {
                            ...subcategoryInfo,
                            topics: {
                                create: topics
                            }
                        };
                    })
                }
            }
        });
        console.log(`Created category with id: ${createdCategory.id}`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    });
