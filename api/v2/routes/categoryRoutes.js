const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Récupérer une catégorie avec ses vidéos associées
router.get('/categories/:categoryId/videos', categoryController.getCategoryWithVideos);

// Récupérer les catégories les plus populaires
router.get('/categories/popular', categoryController.getMostPopularCategories);

module.exports = router;