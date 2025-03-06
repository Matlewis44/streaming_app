const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// Rechercher des vidéos par titre ou description
router.get('/videos/search', videoController.searchVideos);

// Récupérer les vidéos par catégorie
router.get('/videos/category/:categoryId', videoController.getVideosByCategory);

module.exports = router;