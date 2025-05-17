const express = require('express');
const cors = require('cors');
const reservationRoutes = require('./routes/reservations');
const path = require('path');
require('dotenv').config(); // Charger .env

const app = express();

// Middleware CORS avec whitelist
app.use(cors({
  origin: ['http://localhost:5173', 'https://sikany.onrender.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, 'client', 'dist');
  app.use(express.static(clientBuildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

// JSON parsing
app.use(express.json());

// Logger simple
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Route pour servir les fichiers (utile en local, inutile sur Render avec /tmp)
app.use('/uploads', express.static('/tmp'));

// Routes
app.use('/api/reservations', reservationRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
