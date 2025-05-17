const express = require('express');
const app = express();
const reservationRoutes = require('./routes/reservations');

app.use(express.json());

// LOG request
app.use((req, res, next) => {
  console.log(`[TRACE] ${req.method} ${req.originalUrl}`);
  next();
});

// API mount
app.use('/api', reservationRoutes);

module.exports = app;
