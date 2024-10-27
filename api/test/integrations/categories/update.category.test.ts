import { db } from "../../../src/config";
import { api } from "../../jest.setup";

describe("Update category", () => {
    test("Update new category success...[!]", async () => {

        const categoryId = await db.category.findFirst({
            orderBy: {
                updatedAt: "desc",
            },
            select: { id: true }
        });

        const data = {
            name: "Science 2",
            description: "Various scientific disciplines",

        }

        const response = await api.put(`/api/categories/${categoryId!.id}`).send(data);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("info");
        expect(response.body).toHaveProperty("message");

    });


});