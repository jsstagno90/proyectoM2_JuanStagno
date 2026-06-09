const express = require("express");
const router = express.Router();

const { getAuthors,
    getAuthor,
    createNewAuthor,
    updateAuthorById,
    deleteAuthorById
 } = require("../controllers/authors.controller");

router.get("/", getAuthors);
router.get("/:id", getAuthor);

router.post("/", createNewAuthor);

router.put("/:id", updateAuthorById);

router.delete("/:id", deleteAuthorById);

module.exports = router;