const express = require('express');
const app = express();
const reservationRoutes = require('./routes/reservations');

app.use(express.json());
app.use('/api', reservationRoutes);

module.exports = app;
