const express = require("express");
const router = express.Router();

const {
    getPosts,
    getPost
} = require("../controllers/posts.controller");

router.get("/", getPosts);
router.get("/:id", getPost);

module.exports = router;