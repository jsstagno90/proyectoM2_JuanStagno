const pool = require("../db/database");

async function getAllPosts() {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
}

async function getPostById(id) {
    const result = await pool.query(
        "SELECT * FROM posts WHERE id = $1",
        [id]
    );

    return result.rows[0];
}

async function createPost(author_id, title, content, published) {
    const result = await pool.query(
        `
        INSERT INTO posts (author_id, title, content, published)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
        [author_id, title, content, published]
    );

    return result.rows[0];
}
module.exports = {
    getAllPosts,
    getPostById,
    createPost,
};