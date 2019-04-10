const express = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');
const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/box', BoxController.store);
routes.post('/file', multer(multerConfig).single(), FileController.store);
module.exports = routes;
