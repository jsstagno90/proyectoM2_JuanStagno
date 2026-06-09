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
module.exports = {
    getAllPosts,
    getPostById,
};