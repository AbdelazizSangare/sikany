const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'visions1_root22',
  password: '+visions1root2122+',
  database: 'sikany_site_internet'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à MySQL');
});

module.exports = connection;
