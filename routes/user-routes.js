const router = require('express').Router();
const userController = require('../controllers/user-controller');
const {cekUserAgent} = require('../helpers/useragent')

router.post('/register',cekUserAgent,userController.register);
router.post('/login',cekUserAgent,userController.login);

module.exports = router;