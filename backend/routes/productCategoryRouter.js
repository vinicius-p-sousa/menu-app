const { Router } = require('express');
const loginRequired = require('../middlewares/loginRequired');

const getCategories = require('../controllers/productCategory/getCategories.js');
const createCategory = require('../controllers/productCategory/createCategory.js');
const updateCategory = require('../controllers/productCategory/updateCategory.js');
const deleteCategory = require('../controllers/productCategory/deleteCategory.js');

const router = new Router();

router.get('/', (req, res) => getCategories(req, res));
router.post('/', loginRequired, (req, res) => createCategory(req, res));
router.put('/:name', loginRequired, (req, res) => updateCategory(req, res));
router.delete('/:name', loginRequired, (req, res) => deleteCategory(req, res));

module.exports = router;
