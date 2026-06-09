const request = require("supertest");
const app = require("../app");

describe("Authors Endpoints", () => {

    test("GET /authors debe responder con status 200", async () => {

        const response = await request(app)
            .get("/authors");

        expect(response.statusCode).toBe(200);

    });

});