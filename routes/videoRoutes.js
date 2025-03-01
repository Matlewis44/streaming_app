const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/videos', videoController.createVideo);
router.get('/videos/:id', videoController.getVideo);
router.put('/videos/:id', videoController.updateVideo);
router.delete('/videos/:id', videoController.deleteVideo);
router.get('/videos', videoController.listVideos);

module.exports = router;