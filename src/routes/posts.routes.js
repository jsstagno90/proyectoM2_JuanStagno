const express = require("express");
const router = express.Router();

const {
    getPosts,
    getPost,
    createNewPost
} = require("../controllers/posts.controller");

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createNewPost);

module.exports = router;