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

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.use('/api/reservations', reservationRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
