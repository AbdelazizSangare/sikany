import cors from 'cors';

const express = require('express');
const cors = require('cors');
const reservationRoutes = require('./routes/reservations');
const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'https://sikany.onrender.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/reservations', reservationRoutes);

const PORT = process.env.DB_PORT || 4000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
