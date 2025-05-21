const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectTimeout: 10000, // 10 secondes
  debug: true
});

console.log('Tentative de connexion à MySQL avec les paramètres:', {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL :', err);
    process.exit(1);
  }
  console.log('Connecté à MySQL');
});

module.exports = connection;
