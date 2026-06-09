const { getAllAuthors,
        getAuthorById,
        createAuthor,
        updateAuthor,
        deleteAuthor

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

async function createNewAuthor(req, res) {
    try {
        const { name, email, bio } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "name y email son obligatorios"
            });
        }

        const newAuthor = await createAuthor(
            name,
            email,
            bio
        );

        res.status(201).json(newAuthor);

    } catch (error) {

        if (error.code === "23505") {
            return res.status(400).json({
                message: "El email ya existe"
            });
        }

        res.status(500).json({
            message: "Error al crear autor",
            error: error.message
        });
    }
}

async function updateAuthorById(req, res) {
    try {
        const { name, email, bio } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "name y email son obligatorios"
            });
        }

        const updatedAuthor = await updateAuthor(
            req.params.id,
            name,
            email,
            bio
        );

        if (!updatedAuthor) {
            return res.status(404).json({
                message: "Autor no encontrado"
            });
        }

        res.json(updatedAuthor);

    } catch (error) {

        if (error.code === "23505") {
            return res.status(400).json({
                message: "El email ya existe"
            });
        }

        res.status(500).json({
            message: "Error al actualizar autor",
            error: error.message
        });
    }
}

async function deleteAuthorById(req, res) {
    try {
        const deletedAuthor = await deleteAuthor(req.params.id);

        if (!deletedAuthor) {
            return res.status(404).json({
                message: "Autor no encontrado"
            });
        }

        res.status(204).send();

    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar autor",
            error: error.message
        });
    }
}

module.exports = {
    getAuthors,
    getAuthor,
    createNewAuthor,
    updateAuthorById,
    deleteAuthorById
};