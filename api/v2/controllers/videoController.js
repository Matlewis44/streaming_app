const Video = require('../../../models/Video');

// Rechercher des vidéos par titre ou description
exports.searchVideos = async (req, res) => {
  try {
    const { query } = req.query;
    const videos = await Video.find({
      $or: [
        { title: { $regex: query, $options: 'i' } }, // Recherche insensible à la casse
        { description: { $regex: query, $options: 'i' } },
      ],
    }).populate('category');
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer les vidéos par catégorie
exports.getVideosByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const videos = await Video.find({ category: categoryId }).populate('category');
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};