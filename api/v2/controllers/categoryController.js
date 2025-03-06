const Category = require('../../../models/Category');
const Video = require('../../../models/Video');

// Récupérer une catégorie avec ses vidéos associées
exports.getCategoryWithVideos = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    const videos = await Video.find({ category: categoryId });
    res.json({ category, videos });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer les catégories les plus populaires
exports.getMostPopularCategories = async (req, res) => {
  try {
    const categories = await Category.aggregate([
      {
        $lookup: {
          from: 'videos', // Collection des vidéos
          localField: '_id',
          foreignField: 'category',
          as: 'videos',
        },
      },
      {
        $project: {
          name: 1,
          description: 1,
          videoCount: { $size: '$videos' }, // Compter le nombre de vidéos
        },
      },
      { $sort: { videoCount: -1 } }, // Trier par nombre de vidéos (décroissant)
      { $limit: 5 }, // Limiter aux 5 catégories les plus populaires
    ]);
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};