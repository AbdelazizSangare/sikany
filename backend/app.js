const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const app = express();

// Configuration CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Protection du dossier uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes API
app.use('/api', routes);

// Middleware de gestion d'erreur 404
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Middleware de gestion d'erreur global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' 
      ? 'Une erreur est survenue' 
      : err.message
  });
});

module.exports = app;
