const express = require('express');
const cors = require('cors');
const reservationRoutes = require('./routes/reservations');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/reservations', reservationRoutes);

const PORT = 10000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
