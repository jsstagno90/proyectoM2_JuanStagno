const {
    getAllPosts,
    getPostById
} = require("../services/posts.service");

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
async function getPost(req, res) {
    try {
        const post = await getPostById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post no encontrado",
            });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener post",
            error: error.message,
        });
    }
}

module.exports = {
    getPosts,
    getPost,
};