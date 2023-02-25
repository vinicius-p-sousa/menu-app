const { Router } = require('express');
const loginRequired = require('../middlewares/loginRequired');

const getCategories = require('../controllers/productCategory/getCategories');
const createCategory = require('../controllers/productCategory/createCategory');
const updateCategory = require('../controllers/productCategory/updateCategory');
const deleteCategory = require('../controllers/productCategory/deleteCategory');

const router = new Router();

router.get('/', (req, res) => getCategories(req, res));
router.post('/', loginRequired, (req, res) => createCategory(req, res));
router.put('/:name', loginRequired, (req, res) => updateCategory(req, res));
router.delete('/:name', loginRequired, (req, res) => deleteCategory(req, res));

module.exports = router;
