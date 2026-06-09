const express = require("express");
const router = express.Router();

const { getAuthors,
    getAuthor
 } = require("../controllers/authors.controller");

router.get("/", getAuthors);
router.get("/:id", getAuthor);

module.exports = router;