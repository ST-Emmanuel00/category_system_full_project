import { api } from "../jest.setup";

describe("Category Test", () => {
    test("Create new category...[!]", async () => {

      const response = await api.post("/api/categories/");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("info");
      expect(response.body).toHaveProperty("message");

    });
  
    
  });