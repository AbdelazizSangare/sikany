const request = require('supertest');
const app = require('../app');
const { pool, resetDatabase, closePool } = require('./setup/db.test');

// Configuration globale pour les tests
beforeAll(async () => {
  // Attendre que la base de données soit prête
  await new Promise(resolve => setTimeout(resolve, 1000));
});

beforeEach(async () => {
  // Réinitialiser la base de données avant chaque test
  await resetDatabase();
});

afterAll(async () => {
  // Fermer la connexion à la base de données
  await closePool();
});

describe('API Routes Tests', () => {
  describe('POST /api/contact', () => {
    it('should create a new contact message', async () => {
      const contactData = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message'
      };

      const response = await request(app)
        .post('/api/contact')
        .send(contactData)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('name', contactData.name);
      expect(response.body).toHaveProperty('email', contactData.email);
      expect(response.body).toHaveProperty('message', contactData.message);
    });

    it('should validate required fields', async () => {
      const invalidData = {
        name: 'Test User'
        // email et message manquants
      };

      const response = await request(app)
        .post('/api/contact')
        .send(invalidData)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });

    it('should validate email format', async () => {
      const invalidData = {
        name: 'Test User',
        email: 'invalid-email',
        message: 'Test message'
      };

      const response = await request(app)
        .post('/api/contact')
        .send(invalidData)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/contact', () => {
    it('should return all contact messages', async () => {
      // Insérer des données de test
      const connection = await pool.getConnection();
      try {
        await connection.query(
          'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
          ['Test User 1', 'test1@example.com', 'Message 1']
        );
        await connection.query(
          'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
          ['Test User 2', 'test2@example.com', 'Message 2']
        );
      } finally {
        connection.release();
      }

      const response = await request(app)
        .get('/api/contact')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(2);
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('email');
      expect(response.body[0]).toHaveProperty('message');
    });
  });

  describe('Security Tests', () => {
    it('should prevent SQL injection', async () => {
      const maliciousData = {
        name: "'; DROP TABLE contacts; --",
        email: 'test@example.com',
        message: 'Test message'
      };

      const response = await request(app)
        .post('/api/contact')
        .send(maliciousData)
        .expect('Content-Type', /json/);

      // Vérifier que la table existe toujours
      const connection = await pool.getConnection();
      try {
        const [tables] = await connection.query('SHOW TABLES LIKE "contacts"');
        expect(tables.length).toBe(1);
      } finally {
        connection.release();
      }
    });

    it('should prevent XSS attacks', async () => {
      const xssData = {
        name: '<script>alert("xss")</script>',
        email: 'test@example.com',
        message: '<img src="x" onerror="alert(\'xss\')">'
      };

      const response = await request(app)
        .post('/api/contact')
        .send(xssData)
        .expect('Content-Type', /json/)
        .expect(201);

      // Vérifier que le HTML a été échappé
      expect(response.body.name).not.toContain('<script>');
      expect(response.body.message).not.toContain('<img');
    });
  });
}); 