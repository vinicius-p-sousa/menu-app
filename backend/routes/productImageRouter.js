const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multerConfig');
const loginRequired = require('../middlewares/loginRequired');

const addNewImages = require('../controllers/productImagesController/addNewImages');
const getProductImages = require('../controllers/productImagesController/getProductImages');
const deleteImages = require('../controllers/productImagesController/deleteImages');

const router = new Router();

router.get('/:name', (req, res) => getProductImages(req, res, req.params.name));
router.post('/:name', loginRequired, multer(multerConfig).array('imgs'), (req, res) =>
  addNewImages(req, res, req.params.name)
);
router.delete('/:imageId', loginRequired, (req, res) => deleteImages(req, res, req.params.imageId));

module.exports = router;
