const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multerConfig');
const loginRequired = require('../middlewares/loginRequired');

const { getProducts, getProductByName, getProductsByCategory } = require('../controllers/products/getProducts');
const createProduct = require('../controllers/products/createProduct');
const updateProduct = require('../controllers/products/updateProduct');
const deleteProduct = require('../controllers/products/deleteProduct');
const searchProducts = require('../controllers/products/searchProducts');

const router = new Router();

router.get('/', (req, res) => getProducts(req, res));
router.get('/:name', (req, res) => getProductByName(req, res, req.params.name));
router.get('/category/:name', (req, res) => getProductsByCategory(req, res, req.params.name));
router.post('/', loginRequired, multer(multerConfig).array('imgs'), (req, res) => createProduct(req, res));
router.put('/:name', loginRequired, (req, res) => updateProduct(req, res));
router.delete('/:name', loginRequired, (req, res) => deleteProduct(req, res));
router.post('/search/:text', (req, res) => searchProducts(req, res));

module.exports = router;
