const {
    getAllPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost
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

async function createNewPost(req, res) {
    try {
        const { author_id, title, content, published } = req.body;

        if (!author_id || !title || !content) {
            return res.status(400).json({
                message: "author_id, title y content son obligatorios"
            });
        }

        const newPost = await createPost(
            author_id,
            title,
            content,
            published ?? false
        );

        res.status(201).json(newPost);

    } catch (error) {
        res.status(500).json({
            message: "Error al crear post",
            error: error.message
        });
    }
}



async function deletePostById(req, res) {
    try {
        const deletedPost = await deletePost(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({
                message: "Post no encontrado"
            });
        }

        res.status(204).send();

    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar post",
            error: error.message
        });
    }
}

async function updatePostById(req, res) {
    try {
        const { author_id, title, content, published } = req.body;

        if (!author_id || !title || !content) {
            return res.status(400).json({
                message: "author_id, title y content son obligatorios"
            });
        }

        const updatedPost = await updatePost(
            req.params.id,
            author_id,
            title,
            content,
            published ?? false
        );

        if (!updatedPost) {
            return res.status(404).json({
                message: "Post no encontrado"
            });
        }

        res.json(updatedPost);

    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar post",
            error: error.message
        });
    }
}

module.exports = {
    getPosts,
    getPost,
    createNewPost,
    deletePostById,
    updatePostById
};