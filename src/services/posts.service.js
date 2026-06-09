const pool = require("../db/database");

async function getAllPosts() {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
}

module.exports = {
    getAllPosts,
};