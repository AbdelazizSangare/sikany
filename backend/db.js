const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sikany_user',
  password: 'sikany123',
  database: 'reservations_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à MySQL');
});

module.exports = connection;
