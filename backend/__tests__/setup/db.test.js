const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Charger les variables d'environnement de test
dotenv.config({ path: '.env.test' });

// Configuration de la base de données de test
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'test_user',
  password: process.env.DB_PASS || 'test_password',
  database: process.env.DB_NAME || 'sikany_test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Créer un pool de connexions pour les tests
const pool = mysql.createPool(dbConfig);

// Fonction pour réinitialiser la base de données avant chaque test
async function resetDatabase() {
  const connection = await pool.getConnection();
  try {
    // Désactiver les contraintes de clé étrangère
    await connection.query('SET FOREIGN_KEY_CHECKS = 0');
    
    // Récupérer toutes les tables
    const [tables] = await connection.query('SHOW TABLES');
    
    // Vider toutes les tables
    for (const table of tables) {
      const tableName = Object.values(table)[0];
      await connection.query(`TRUNCATE TABLE ${tableName}`);
    }
    
    // Réactiver les contraintes de clé étrangère
    await connection.query('SET FOREIGN_KEY_CHECKS = 1');
  } finally {
    connection.release();
  }
}

// Fonction pour fermer le pool de connexions
async function closePool() {
  await pool.end();
}

module.exports = {
  pool,
  resetDatabase,
  closePool,
  dbConfig
}; 