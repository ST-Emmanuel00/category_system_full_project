import { db } from "../../../src/config";
import { api } from "../../jest.setup";

describe("Add new topic", () => {
    test("Add new topic success...[!]", async () => {

        const subCategory = await db.subcategory.findFirst({
            orderBy: {
                updatedAt: "desc",
            },
            select: { id: true }
        });
        const data = {
            subcategoryId: subCategory!.id,
            name: "Science 3",
            description: "Various scientific disciplines",

        }

        const response = await api.post(`/api/topics/`).send(data);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("info");
        expect(response.body).toHaveProperty("message");

    });


});