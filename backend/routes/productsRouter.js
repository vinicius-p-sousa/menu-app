const { Router } = require('express');

const {
  getProducts,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productsController');

const router = new Router();

router.get('/', (req, res) => getProducts(req, res, req.params.page, req.params.limit));
router.get('/:name', (req, res) => getProductByName(req, res, req.params.name));
router.post('/', (req, res) => createProduct(req, res));
router.put('/:name', (req, res) => updateProduct(req, res));
router.delete('/:name', (req, res) => deleteProduct(req, res));

module.exports = router;
