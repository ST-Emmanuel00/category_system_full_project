import { api } from "../../jest.setup";

describe("Get all categories", () => {
    test("Get all categories success...[!]", async () => {

      const response = await api.get("/api/categories/");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("info");
      expect(response.body).toHaveProperty("message");

    });
  
    
  });