const express = require('express');
const connectDB = require('./config/configDB');

const userRoutes = require('./routes/userRoutes');
const videoRoutes = require('./routes/videoRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const watchHistoryRoutes = require('./routes/watchHistoryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à la base de données
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', videoRoutes);
app.use('/api', categoryRoutes);
app.use('/api', subscriptionRoutes);
app.use('/api', watchHistoryRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});