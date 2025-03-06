const express = require('express');
const connectDB = require('./config/configDB');

const apiUserV1 = require('./api/v1/routes/userRoutes');
const apiVideoV1 = require('./api/v1/routes/videoRoutes');
const apiCategoryV1 = require('./api/v1/routes/categoryRoutes');
const apiSubscriptionV1 = require('./api/v1/routes/subscriptionRoutes');
const apiWatchHistoryV1 = require('./api/v1/routes/watchHistoryRoutes');

const apiUserV2 = require('./api/v2/routes/userRoutes');
const apiVideoV2 = require('./api/v2/routes/videoRoutes');
const apiCategoryV2 = require('./api/v2/routes/categoryRoutes');
const apiSubscriptionV2 = require('./api/v2/routes/subscriptionRoutes');
const apiWatchHistoryV2 = require('./api/v2/routes/watchHistoryRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à la base de données
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', apiUserV1);
app.use('/api/v1', apiVideoV1);
app.use('/api/v1', apiCategoryV1);
app.use('/api/v1', apiSubscriptionV1);
app.use('/api/v1', apiWatchHistoryV1);

app.use('/api/v2', apiUserV2);
app.use('/api/v2', apiVideoV2);
app.use('/api/v2', apiCategoryV2);
app.use('/api/v2', apiSubscriptionV2);
app.use('/api/v2', apiWatchHistoryV2);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});