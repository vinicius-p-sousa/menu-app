const { Router } = require('express');
const loginRequired = require('../middlewares/loginRequired');

const router = new Router();

const getAdmins = require('../controllers/admin/getAdmin');
const createAdmin = require('../controllers/admin/createAdmin');
const updateAdmin = require('../controllers/admin/updateAdmin');
const deleteAdmin = require('../controllers/admin/deleteAdmin');
const loginAdmin = require('../controllers/admin/loginAdmin');

router.get('/', loginRequired, (req, res) => getAdmins(req, res));
router.post('/', loginRequired, (req, res) => createAdmin(req, res));
router.put('/:name?', loginRequired, (req, res) => updateAdmin(req, res));
router.delete('/:name?', loginRequired, (req, res) => deleteAdmin(req, res));
router.post('/login', (req, res) => loginAdmin(req, res));

module.exports = router;
