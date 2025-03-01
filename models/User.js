const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: { type: Map, of: String }, // Clé-valeur pour les préférences utilisateur
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);