const Subscription = require('../../../models/Subscription');

// Récupérer les abonnements actifs
exports.getActiveSubscriptions = async (req, res) => {
  try {
    const activeSubscriptions = await Subscription.find({
      endDate: { $gte: new Date() }, // Abonnements non expirés
    }).populate('userId');
    res.json(activeSubscriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Annuler un abonnement
exports.cancelSubscription = async (req, res) => {
  try {
    const { subscriptionId } = req.params;
    const subscription = await Subscription.findByIdAndUpdate(
      subscriptionId,
      { endDate: new Date() }, // Met à jour la date de fin pour annuler
      { new: true }
    );
    if (!subscription) {
      return res.status(404).json({ error: 'Subscription not found' });
    }
    res.json(subscription);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};