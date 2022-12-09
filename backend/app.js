const express = require('express');
const helmet = require('helmet');

const homeRouter = require('./routes/homeRouter');
const productsRouter = require('./routes/productsRouter');
const productImageRouter = require('./routes/productImageRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();

app.use(express.json());
app.use(helmet());

app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/products/images', productImageRouter);
app.use('/admin', adminRouter);

module.exports = app;
