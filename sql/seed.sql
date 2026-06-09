INSERT INTO authors (name, email, bio)
VALUES
(
    'Juan Perez',
    'juan@example.com',
    'Desarrollador Full Stack'
),
(
    'Maria Garcia',
    'maria@example.com',
    'Especialista en tecnología'
),
(
    'Carlos Lopez',
    'carlos@example.com',
    'Creador de contenido'
);

INSERT INTO posts (author_id, title, content, published)
VALUES
(
    1,
    'Mi primer post',
    'Contenido de mi primer post',
    true
),
(
    1,
    'Aprendiendo Node.js',
    'Express y PostgreSQL son una gran combinación',
    true
),
(
    2,
    'Introducción a APIs REST',
    'Las APIs REST permiten comunicar aplicaciones',
    true
),
(
    3,
    'Mi experiencia con PostgreSQL',
    'PostgreSQL es una base de datos muy potente',
    false
);