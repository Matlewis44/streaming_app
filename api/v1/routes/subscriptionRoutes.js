const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

router.post('/subscriptions', subscriptionController.createSubscription);
router.get('/subscriptions/:id', subscriptionController.getSubscription);
router.put('/subscriptions/:id', subscriptionController.updateSubscription);
router.delete('/subscriptions/:id', subscriptionController.deleteSubscription);
router.get('/subscriptions', subscriptionController.listSubscriptions);

module.exports = router;