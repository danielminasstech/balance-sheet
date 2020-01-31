const express = require('express');
const router = express.Router();
const controller = require('../controller/category');
/* category routes */
router.get('/', controller.findAll);
router.get('/:id_category', controller.findById);
router.put('/:id_category', controller  .update);
router.post('/', controller.create);
router.delete('/:id_category', controller.destroy);

module.exports = router;
