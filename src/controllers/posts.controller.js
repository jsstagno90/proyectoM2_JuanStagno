const { getAllPosts } = require("../services/posts.service");

async function getPosts(req, res) {
    try {
        const posts = await getAllPosts();

        res.json(posts);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener posts",
            error: error.message,
        });
    }
}

module.exports = {
    getPosts,
};