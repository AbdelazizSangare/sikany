const express = require('express');
const app = express();
const reservationRoutes = require('./routes/reservations');

app.use(express.json());
app.use((req, res, next) => {
  console.log("Requête entrante :", req.method, req.url);
  next();
});
app.use('/api', reservationRoutes);

module.exports = app;
