const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const homeRouter = require('./routes/homeRouter');
const productsRouter = require('./routes/productsRouter');
const productImageRouter = require('./routes/productImageRouter');
const productCategoryRouter = require('./routes/productCategoryRouter');
const adminRouter = require('./routes/adminRouter');
const tokenRouter = require('./routes/tokenRouter');

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/products/images', productImageRouter);
app.use('/categories', productCategoryRouter);
app.use('/admin', adminRouter);
app.use('/token', tokenRouter);

module.exports = app;
