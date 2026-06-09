const request = require("supertest");
const app = require("../app");

describe("Posts Endpoints", () => {

    test("GET /posts debe responder con status 200", async () => {

        const response = await request(app)
            .get("/posts");

        expect(response.statusCode).toBe(200);

    });

    test("POST /posts crea un nuevo post", async () => {

    const response = await request(app)
        .post("/posts")
        .send({
            author_id: 6,
            title: "Post de prueba",
            content: "Contenido creado desde Jest",
            published: true
        });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("Post de prueba");

});

});