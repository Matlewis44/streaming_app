const Video = require('../models/Video');

exports.createVideo = async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate('category');
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.json({ message: 'Video deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('category');
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};