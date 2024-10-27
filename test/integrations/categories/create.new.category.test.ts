import { api } from "../../jest.setup";

describe("Create new category", () => {
  test("Create new category success...[!]", async () => {

    const data = {
        name: "Science 2",
        description: "Various scientific disciplines",
      
    }

    const response = await api.post("/api/categories/").send(data);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("info");
    expect(response.body).toHaveProperty("message");

  });


});