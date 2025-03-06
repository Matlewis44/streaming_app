const express = require('express');
const router = express.Router();
const watchHistoryController = require('../controllers/watchHistoryController');

// Récupérer l'historique de visionnage d'un utilisateur
router.get('/watchHistory/user/:userId', watchHistoryController.getUserWatchHistory);

// Récupérer les vidéos les plus regardées
router.get('/watchHistory/mostWatched', watchHistoryController.getMostWatchedVideos);

module.exports = router;