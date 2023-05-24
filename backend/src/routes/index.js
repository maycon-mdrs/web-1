const express = require('express');
const config = require('./configRoute');
const links = require('./linksRoute');
const tipo_link = require('./tipo_linkRoute');

module.exports = app => {
    app.use(express.json());
    app.use(config);
    app.use(links);
    app.use(tipo_link);
    app.get('/', (req, res) => res.send('Teste'));
    app.use(
        (req, res) => {
            res.status(404).send("deu merda")
        }
    )
}