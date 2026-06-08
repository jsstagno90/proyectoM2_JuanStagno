const pool = require("../db/database");

async function getAllAuthors() {
    const result = await pool.query("SELECT * FROM authors");
    return result.rows;
}

module.exports = {
    getAllAuthors,
};