const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multerConfig');
const loginRequired = require('../middlewares/loginRequired');

const addNewImages = require('../controllers/productImages/addNewImages');
const getProductImages = require('../controllers/productImages/getProductImages');
const deleteImages = require('../controllers/productImages/deleteImages');

const router = new Router();

router.get('/:name', (req, res) => getProductImages(req, res, req.params.name));
router.post('/:name', loginRequired, multer(multerConfig).array('imgs'), (req, res) => addNewImages(req, res, req.params.name));
router.delete('/:imageId', loginRequired, (req, res) => deleteImages(req, res, req.params.imageId));

module.exports = router;
