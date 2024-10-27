import { db } from "../../../src/config";
import { api } from "../../jest.setup";

describe("Update sub category", () => {
    test("Update sub category success...[!]", async () => {

        const subCategoryId = await db.subcategory.findFirst({
            orderBy: {
                updatedAt: "desc",
            },
            select: { id: true }
        });

        const data = {
            name: "Science 2",
            description: "Various scientific disciplines",

        }

        const response = await api.put(`/api/sub-categories/${subCategoryId!.id}`).send(data);


        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("info");
        expect(response.body).toHaveProperty("message");

    });


});