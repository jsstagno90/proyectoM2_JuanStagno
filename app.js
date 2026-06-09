const express = require("express");

const authorsRoutes = require("./src/routes/authors.routes");
const postsRoutes = require("./src/routes/posts.routes");

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.use("/authors", authorsRoutes);
app.use("/posts", postsRoutes);

module.exports = app;