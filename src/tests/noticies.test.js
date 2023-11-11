import { getNoticie } from "../servicies/news";
import { app, server } from "../main";
import request from "supertest";

const api = request(app);

test("search noticies", async () => {
  const noticies = await getNoticie("steam");

  expect(Array.isArray(noticies)).toBe(true);

  expect(noticies).toHaveLength(12);
});

describe("GET noticies", () => {
  test("to retunr 12 values in an array and status 200", async () => {
    const res = await api.get("/api/noticies/steam").expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(12);
  });

  test("to retunr json", async () => {
    await api.get("/api/noticies/steam").expect("Content-Type", /json/);
  });
});

afterAll(() => {
  server.close();
});
