const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Récupérer les abonnements actifs
router.get('/subscriptions/active', subscriptionController.getActiveSubscriptions);

// Annuler un abonnement
router.put('/subscriptions/:subscriptionId/cancel', subscriptionController.cancelSubscription);

module.exports = router;