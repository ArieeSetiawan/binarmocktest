const router = require('express').Router();
const itemController = require('../controllers/data-controller');
const { authentication, authorization } = require ('../middlewares/auth')

router.post('/create',authentication, authorization.admin,itemController.createItem);
router.get('/',authentication, authorization.admin,itemController.getAllItem);
router.get('/:id',authentication, authorization.admin,itemController.getItemByID);
router.put('/:id',authentication, authorization.admin,itemController.editItem);
router.delete('/:id',authentication, authorization.admin,itemController.deleteItem);

module.exports = router;