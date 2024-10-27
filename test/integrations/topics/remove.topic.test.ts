import { db } from "../../../src/config";
import { api } from "../../jest.setup";

describe("Remove topics", () => {
    test("Remove topics success...[!]", async () => {
        const topic = await db.topic.findFirst({
            orderBy: {
                updatedAt: "desc",
            },
            select: { id: true }
        });

        const response = await api.delete(`/api/topics/${topic!.id}`);

        console.log("response:", response.body)
        console.log("topic:", topic)

        
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("info");
        expect(response.body).toHaveProperty("message");

    });


});