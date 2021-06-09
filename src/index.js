const { request, response } = require("express");
const express = require("express");

const app = express();

app.get('/courses', (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4", "Curso 5"]);
});

app.post('/courses', (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4", "Curso 5", "Curso 6"]);
});

app.put('/courses/:id', (request, response) => {
    return response.json(["Curso 7", "Curso 2", "Curso 3", "Curso 4", "Curso 5", "Curso 8"]);
});

app.delete('/courses/:id', (request, response) => {
    return response.json(["Curso 2", "Curso 3", "Curso 4", "Curso 5"]);
});

app.listen(3333);


