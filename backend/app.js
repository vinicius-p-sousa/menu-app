const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const homeRouter = require('./routes/homeRouter');
const productsRouter = require('./routes/productsRouter');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());

app.use('/', homeRouter);
app.use('/products', productsRouter);

module.exports = app;
