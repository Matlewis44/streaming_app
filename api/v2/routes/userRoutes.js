const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Récupérer un utilisateur par son email
router.get('/users/email/:email', userController.getUserByEmail);

// Mettre à jour les préférences de l'utilisateur
router.put('/users/:userId/preferences', userController.updateUserPreferences);

module.exports = router;

