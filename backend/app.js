const express = require('express');
const helmet = require('helmet');

const homeRouter = require('./routes/homeRouter');
const productsRouter = require('./routes/productsRouter');

const app = express();

app.use(express.json());
app.use(helmet());

app.use('/', homeRouter);
app.use('/products', productsRouter);

module.exports = app;
