import { db } from "../../../src/config";
import { api } from "../../jest.setup";

describe("Remove sub category", () => {
    test("Remove category success...[!]", async () => {
        const subCategoryId = await db.subcategory.findFirst({
            orderBy: {
                updatedAt: "desc",
            },
            select: { id: true }
        });

        const response = await api.delete(`/api/sub-categories/${subCategoryId!.id}`);


        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("info");
        expect(response.body).toHaveProperty("message");

    });


});