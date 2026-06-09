const express = require("express");
const router = express.Router();

const {
    getPosts,
    getPost,
    createNewPost,
    deletePostById,
    updatePostById,
    getPostsAuthor
} = require("../controllers/posts.controller");

router.get("/", getPosts);
router.get("/author/:authorId", getPostsAuthor);
router.get("/:id", getPost);

router.post("/", createNewPost);

router.delete("/:id", deletePostById);

router.put("/:id", updatePostById);

module.exports = router;