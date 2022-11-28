const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multerConfig');

const { getProducts, getProductByName } = require('../controllers/products/getProducts');
const { createProduct } = require('../controllers/products/createProduct');
const { updateProduct } = require('../controllers/products/updateProduct');
const { deleteProduct } = require('../controllers/products/deleteProduct');
const { addNewImage } = require('../controllers/products/imagesController');

const router = new Router();

router.get('/', (req, res) => getProducts(req, res));
router.get('/:name', (req, res) => getProductByName(req, res, req.params.name));
router.post('/', multer(multerConfig).array('imgs'), (req, res) => createProduct(req, res));
router.put('/:name', (req, res) => updateProduct(req, res));
router.delete('/:name', (req, res) => deleteProduct(req, res));

// images route

router.post('/images/:name', multer(multerConfig).array('imgs'), (req, res) =>
  addNewImage(req, res)
);

module.exports = router;
