const router = require('express').Router();
const itemController = require('../controllers/data-controller');
const { authentication, authorization } = require ('../middlewares/auth')
const {cekUserAgent} = require('../helpers/useragent')

router.post('/create',cekUserAgent,authentication, authorization.admin,itemController.createItem);
router.get('/',cekUserAgent,authentication, authorization.admin,itemController.getAllItem);
router.get('/:id',cekUserAgent,authentication, authorization.admin,itemController.getItemByID);
router.put('/:id',cekUserAgent,authentication, authorization.admin,itemController.editItem);
router.delete('/:id',cekUserAgent,authentication, authorization.admin,itemController.deleteItem);

module.exports = router;