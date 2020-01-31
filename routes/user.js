const express = require('express');
const router = express.Router();
const controller = require('../controller/user');
/* user routes */
router.get('/', controller.findAll);
router.get('/:id_user', controller.findById);

router.put('/:id_user', controller.update);
router.post('/', controller.create);
router.delete('/:id_user', controller.destroy);

module.exports = router;
