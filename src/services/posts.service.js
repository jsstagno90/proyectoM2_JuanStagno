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

async function deletePost(id) {
    const result = await pool.query(
        "DELETE FROM posts WHERE id = $1 RETURNING *",
        [id]
    );

    return result.rows[0];
}

async function updatePost(id, author_id, title, content, published) {
    const result = await pool.query(
        `
        UPDATE posts
        SET author_id = $1,
            title = $2,
            content = $3,
            published = $4
        WHERE id = $5
        RETURNING *
        `,
        [author_id, title, content, published, id]
    );

    return result.rows[0];
}

async function getPostsByAuthor(authorId) {
    const result = await pool.query(
        `
        SELECT
            p.id,
            p.title,
            p.content,
            p.published,
            p.created_at,
            a.id AS author_id,
            a.name,
            a.email,
            a.bio
        FROM posts p
        JOIN authors a
            ON p.author_id = a.id
        WHERE a.id = $1
        `,
        [authorId]
    );

    return result.rows;
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost,
    getPostsByAuthor
};