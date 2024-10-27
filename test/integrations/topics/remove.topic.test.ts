import { db } from "../../../src/config";
import { api } from "../../jest.setup";

describe("Remove topics", () => {
    test("Remove topics success...[!]", async () => {
        const topicId = await db.topic.findFirst({
            orderBy: {
                updatedAt: "desc",
            },
            select: { id: true }
        });

        const response = await api.delete(`/api/topics/${topicId!.id}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("info");
        expect(response.body).toHaveProperty("message");

    });


});