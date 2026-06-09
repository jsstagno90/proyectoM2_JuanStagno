const express = require("express");
const router = express.Router();

const {
    getPosts,
    getPost,
    createNewPost,
    deletePostById
} = require("../controllers/posts.controller");

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createNewPost);
router.delete("/:id", deletePostById);

module.exports = router;