console.log('Starting server...');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const port = 8000;

const app = express();
mongoose.connect('mongodb+srv://massolari:massolari@rocket-react-ecgmd.mongodb.net/omnistack?retryWrites=true', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port);
console.log('Server started!');
console.log(`Listening port ${port}...`);

