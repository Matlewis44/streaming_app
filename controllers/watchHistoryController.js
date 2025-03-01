const WatchHistory = require('../models/WatchHistory');

exports.createWatchHistory = async (req, res) => {
  try {
    const watchHistory = new WatchHistory(req.body);
    await watchHistory.save();
    res.status(201).json(watchHistory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getWatchHistory = async (req, res) => {
  try {
    const watchHistory = await WatchHistory.findById(req.params.id).populate('userId videoId');
    if (!watchHistory) return res.status(404).json({ error: 'Watch history not found' });
    res.json(watchHistory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateWatchHistory = async (req, res) => {
  try {
    const watchHistory = await WatchHistory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!watchHistory) return res.status(404).json({ error: 'Watch history not found' });
    res.json(watchHistory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteWatchHistory = async (req, res) => {
  try {
    const watchHistory = await WatchHistory.findByIdAndDelete(req.params.id);
    if (!watchHistory) return res.status(404).json({ error: 'Watch history not found' });
    res.json({ message: 'Watch history deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listWatchHistories = async (req, res) => {
  try {
    const watchHistories = await WatchHistory.find().populate('userId videoId');
    res.json(watchHistories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};