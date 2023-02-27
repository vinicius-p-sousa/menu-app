const { Router } = require('express');
const loginRequired = require('../middlewares/loginRequired');

const { getCategories, getProductsByCategory } = require('../controllers/productCategory/getCategories');
const createCategory = require('../controllers/productCategory/createCategory');
const updateCategory = require('../controllers/productCategory/updateCategory');
const deleteCategory = require('../controllers/productCategory/deleteCategory');

const router = new Router();

router.get('/', (req, res) => getCategories(req, res));
router.get('/:category', (req, res) => getProductsByCategory(req, res, req.params.category));
router.post('/', loginRequired, (req, res) => createCategory(req, res));
router.put('/:category', loginRequired, (req, res) => updateCategory(req, res));
router.delete('/:category', loginRequired, (req, res) => deleteCategory(req, res));

module.exports = router;
