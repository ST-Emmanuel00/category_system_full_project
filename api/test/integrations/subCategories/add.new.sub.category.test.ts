import { db } from "../../../src/config";
import { api } from "../../jest.setup";

describe("Add new sub category", () => {
    test("Add new sub category success...[!]", async () => {

        const category = await db.category.findFirst({
            orderBy: {
                updatedAt: "desc",
            },
            select: { id: true }
        });

        const data = {
            categoryId: category!.id,
            name: "Science 3",
            description: "Various scientific disciplines",

        }

        const response = await api.post(`/api/sub-categories/`).send(data);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("info");
        expect(response.body).toHaveProperty("message");

    });


});