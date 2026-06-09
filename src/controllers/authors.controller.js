const { getAllAuthors,
        getAuthorById,
} = require("../services/authors.service");

console.log("SERVICE:", {
    getAllAuthors,
    getAuthorById,
});

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

async function getAuthor(req, res) {
    try {
        const author = await getAuthorById(req.params.id);

        if (!author) {
            return res.status(404).json({
                message: "Autor no encontrado"
            });
        }

        res.json(author);

    } catch (error) {
        res.status(500).json({
            message: "Error al obtener autor",
            error: error.message,
        });
    }
}

module.exports = {
    getAuthors,
    getAuthor
};