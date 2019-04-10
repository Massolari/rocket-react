const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

console.log('Starting server...');
app.listen(8000);

