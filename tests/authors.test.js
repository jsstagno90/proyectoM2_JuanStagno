const request = require("supertest");
const app = require("../app");

describe("Authors Endpoints", () => {

    test("GET /authors debe responder con status 200", async () => {

        const response = await request(app)
            .get("/authors");

        expect(response.statusCode).toBe(200);

    });

    test("POST /authors crea un nuevo autor", async () => {

        const response = await request(app)
            .post("/authors")
            .send({
                name: "Autor Test",
                email: `autor${Date.now()}@test.com`,
                bio: "Creado desde Jest"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe("Autor Test");

    });

});