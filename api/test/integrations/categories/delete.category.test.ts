import { db } from "../../../src/config";
import { api } from "../../jest.setup";

describe("Delete category", () => {
    test("Delete category success...[!]", async () => {
        const categoryId = await db.category.findFirst({
            orderBy: {
                updatedAt: "desc",
            },
            select: { id: true }
        });


        const response = await api.delete(`/api/categories/${categoryId!.id}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("info");
        expect(response.body).toHaveProperty("message");

    });


});