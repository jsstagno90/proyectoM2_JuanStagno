# MiniBlog API

## Enlaces
🌐 Aplicación desplegada: https://proyectom2juanstagno-production.up.railway.app/

📖 Documentación Swagger: https://proyectom2juanstagno-production.up.railway.app/api-docs

💻 Repositorio: https://github.com/jsstagno90/proyectoM2_JuanStagno

## Descripción

MiniBlog API es una API REST desarrollada con Node.js, Express y PostgreSQL para gestionar autores y publicaciones.

El proyecto permite realizar operaciones CRUD sobre las entidades **authors** y **posts**, incluyendo validaciones básicas, persistencia en PostgreSQL y pruebas automatizadas con Jest y Supertest.

---

## Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* pg
* Jest
* Supertest
* Dotenv

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/jsstagno90/proyectoM2_JuanStagno
cd ProyectoM2_JuanStagno
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copiar el archivo `.env.example` y crear un archivo `.env`.

Ejemplo:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=miniblog
```

---

## Base de datos

### Crear tablas

Ejecutar el script:

```sql
sql/setup.sql
```

### Insertar datos de prueba

Ejecutar el script:

```sql
sql/seed.sql
```

---

## Ejecutar el proyecto

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

Servidor disponible en:

```txt
http://localhost:3000
```

---

## Endpoints

### Authors

| Método | Endpoint     |
| ------ | ------------ |
| GET    | /authors     |
| GET    | /authors/:id |
| POST   | /authors     |
| PUT    | /authors/:id |
| PATCH  | /authors/:id |
| DELETE | /authors/:id |

### Posts

| Método | Endpoint                |
| ------ | ----------------------- |
| GET    | /posts                  |
| GET    | /posts/:id              |
| GET    | /posts/author/:authorId |
| POST   | /posts                  |
| PUT    | /posts/:id              |
| DELETE | /posts/:id              |

---

## Testing

Ejecutar los tests:

```bash
npm test
```

Pruebas implementadas:

* GET /authors
* POST /authors
* GET /posts
* POST /posts

Frameworks utilizados:

* Jest
* Supertest

---

## OpenAPI

La documentación de la API se encuentra en:

```txt
openapi.yaml
```

---

## Deploy en Railway

### Variables de entorno requeridas

```env
PORT
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME
```

### Pasos generales

1. Subir el proyecto a GitHub.
2. Crear un proyecto en Railway.
3. Conectar el repositorio de GitHub.
4. Agregar una base de datos PostgreSQL.
5. Configurar las variables de entorno.
6. Realizar el deploy.

---

## Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó ChatGPT como herramienta de apoyo para:

* Resolución de errores.
* Explicación de conceptos de Node.js y PostgreSQL.
* Implementación de endpoints CRUD.
* Creación de pruebas automatizadas.
* Asistencia en la documentación del proyecto.

La implementación, adaptación y validación final del código fue realizada por el autor del proyecto.
