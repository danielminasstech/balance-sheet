const express = require('express');
const router = express.Router();
const controller = require('../controller/expense');
/* expense routes */
router.get('/', controller.findAll);
router.get('/:id_expense', controller.findById);

router.put('/:id_expense', controller.update);
router.post('/', controller.create);
router.delete('/:id_expense', controller.destroy);

module.exports = router;
