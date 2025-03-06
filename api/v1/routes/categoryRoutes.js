const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/categories', categoryController.createCategory);
router.post('/categories/bulk', categoryController.createCategories);
router.get('/categories/:id', categoryController.getCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);
router.get('/categories', categoryController.listCategories);

module.exports = router;