const WatchHistory = require('../../../models/WatchHistory');

// Récupérer l'historique de visionnage d'un utilisateur
exports.getUserWatchHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const history = await WatchHistory.find({ userId }).populate('videoId');
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer les vidéos les plus regardées
exports.getMostWatchedVideos = async (req, res) => {
  try {
    const mostWatchedVideos = await WatchHistory.aggregate([
      {
        $group: {
          _id: '$videoId',
          watchCount: { $sum: 1 }, // Compter le nombre de vues
        },
      },
      { $sort: { watchCount: -1 } }, // Trier par nombre de vues (décroissant)
      { $limit: 10 }, // Limiter aux 10 vidéos les plus regardées
      {
        $lookup: {
          from: 'videos', // Collection des vidéos
          localField: '_id',
          foreignField: '_id',
          as: 'video',
        },
      },
      { $unwind: '$video' }, // Déplier le tableau de vidéos
    ]);
    res.json(mostWatchedVideos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};