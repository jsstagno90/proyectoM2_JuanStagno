const request = require("supertest");
const app = require("../app");

describe("Posts Endpoints", () => {

    test("GET /posts debe responder con status 200", async () => {

        const response = await request(app)
            .get("/posts");

        expect(response.statusCode).toBe(200);

    });

});