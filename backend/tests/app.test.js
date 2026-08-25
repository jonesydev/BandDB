import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("GET /api/artists", () => {
  it("should return a list of artists", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("GET /api/artists/:id", () => {
  it("should return a single artist by ID", async () => {
    const response = await request(app).get("/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
  });

  it("should return 404 if artist not found", async () => {
    const response = await request(app).get("/9999");
    expect(response.status).toBe(404);
  });
});

describe("POST /api/artists", () => {
  it("should create a new artist", async () => {
    const newArtist = { name: "New Artist" };
    const response = await request(app).post("/").send(newArtist);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("name", "New Artist");
  });
});

describe("PUT /api/artists/:id", () => {
  it("should update an existing artist", async () => {
    const updatedArtist = { name: "Updated Artist" };
    const response = await request(app).put("/1").send(updatedArtist);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", "Updated Artist");
  });

  it("should return 404 if artist not found", async () => {
    const updatedArtist = { name: "Updated Artist" };
    const response = await request(app).put("/9999").send(updatedArtist);
    expect(response.status).toBe(404);
  });
});

describe("DELETE /api/artists/:id", () => {
  it("should delete an existing artist", async () => {
    const response = await request(app).delete("/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Artist deleted successfully");
  });

  it("should return 404 if artist not found", async () => {
    const response = await request(app).delete("/9999");
    expect(response.status).toBe(404);
  });
}); 

