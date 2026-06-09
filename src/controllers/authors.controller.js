const { getAllAuthors } = require("../services/authors.service");

async function getAuthors(req, res) {
    try {
        const authors = await getAllAuthors();

        res.json(authors);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener autores",
            error: error.message,
        });
    }
}

module.exports = {
    getAuthors,
};