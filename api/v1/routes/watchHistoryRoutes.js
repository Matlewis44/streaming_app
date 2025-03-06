const express = require('express');
const router = express.Router();
const watchHistoryController = require('../controllers/watchHistoryController');

router.post('/watchHistories', watchHistoryController.createWatchHistory);
router.get('/watchHistories/:id', watchHistoryController.getWatchHistory);
router.put('/watchHistories/:id', watchHistoryController.updateWatchHistory);
router.delete('/watchHistories/:id', watchHistoryController.deleteWatchHistory);
router.get('/watchHistories', watchHistoryController.listWatchHistories);

module.exports = router;