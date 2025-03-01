const Subscription = require('../models/Subscription');

exports.createSubscription = async (req, res) => {
  try {
    const subscription = new Subscription(req.body);
    await subscription.save();
    res.status(201).json(subscription);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id).populate('userId');
    if (!subscription) return res.status(404).json({ error: 'Subscription not found' });
    res.json(subscription);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subscription) return res.status(404).json({ error: 'Subscription not found' });
    res.json(subscription);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findByIdAndDelete(req.params.id);
    if (!subscription) return res.status(404).json({ error: 'Subscription not found' });
    res.json({ message: 'Subscription deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find().populate('userId');
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};