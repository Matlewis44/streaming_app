const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  duration: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video', VideoSchema);