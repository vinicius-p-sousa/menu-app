const express = require('express');
const helmet = require('helmet');

const homeRouter = require('./routes/homeRouter');
const productsRouter = require('./routes/productsRouter');
const productImageRouter = require('./routes/productImageRouter');

const app = express();

app.use(express.json());
app.use(helmet());

app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/products/images', productImageRouter);

module.exports = app;
