const express = require('express');

const routes = express.Route();

routes.get('/', (req, res) => {
    return res.send('Teste');
});
module.exports = routes;
