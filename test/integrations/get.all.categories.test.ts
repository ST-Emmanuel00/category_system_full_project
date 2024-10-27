import { api } from "../jest.setup";

describe("Category Test", () => {
    test("Get all categories...[!]", async () => {

      const response = await api.get("/api/categories/");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("info");
      expect(response.body).toHaveProperty("message");

    });
  
    
  });