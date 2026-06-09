const express = require("express");

const authorsRoutes = require("./src/routes/authors.routes");
const postsRoutes = require("./src/routes/posts.routes");

const app = express();

app.use(express.json());


app.use("/authors", authorsRoutes);
app.use("/posts", postsRoutes);

module.exports = app;