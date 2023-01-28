const { Router } = require('express');

const router = new Router();

const getStatistics = require('../controllers/home/getStatistics');

router.get('/', (req, res) => getStatistics(req, res));

module.exports = router;
