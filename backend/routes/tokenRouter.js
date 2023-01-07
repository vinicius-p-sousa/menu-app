const { Router } = require('express');
const checkToken = require('../controllers/token/checkToken');

const router = new Router();

router.post('/', (req, res) => checkToken(req, res));

module.exports = router;
