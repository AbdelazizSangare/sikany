const express = require('express');
const router = express.Router();
const reservationsRouter = require('./reservations');

// Route de test pour vérifier que l'API fonctionne
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'API en ligne' });
});

// Routes des réservations
router.use('/reservations', reservationsRouter);

module.exports = router; 