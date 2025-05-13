const express = require('express');
const cors = require('cors');
const reservationsRoutes = require('./routes/reservations');

const app = express();

// Middleware
app.use(cors()); // autorise React à parler à Express
app.use(express.json()); // parse les body en JSON

// Routes
app.use('/api/reservations', reservationsRoutes);

module.exports = app;
