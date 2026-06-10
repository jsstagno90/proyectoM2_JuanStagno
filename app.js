const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("./openapi.yaml");
const authorsRoutes = require("./src/routes/authors.routes");
const postsRoutes = require("./src/routes/posts.routes");

const app = express();

app.use(express.json());


app.use("/authors", authorsRoutes);
app.use("/posts", postsRoutes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

module.exports = app;