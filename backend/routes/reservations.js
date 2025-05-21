const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../db');

// Validation des données
const validateReservation = (req, res, next) => {
  const { matricule, nom, prenoms, sexe, date_naissance, type_enseignement, niveau } = req.body;
  
  if (!matricule || !nom || !prenoms || !sexe || !date_naissance || !type_enseignement || !niveau) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
  }

  // Validation du format de la date
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date_naissance)) {
    return res.status(400).json({ error: 'Format de date invalide (YYYY-MM-DD)' });
  }

  // Validation du sexe
  if (!['M', 'F'].includes(sexe.toUpperCase())) {
    return res.status(400).json({ error: 'Le sexe doit être M ou F' });
  }

  // Validation du matricule (format: lettres et chiffres uniquement)
  const matriculeRegex = /^[A-Za-z0-9]+$/;
  if (!matriculeRegex.test(matricule)) {
    return res.status(400).json({ error: 'Le matricule ne doit contenir que des lettres et des chiffres' });
  }

  next();
};

// Configuration multer avec gestion d'erreur
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const matricule = req.body.matricule;
    const uploadDir = path.join(__dirname, '../uploads', matricule);
    
    // Créer le dossier pour le matricule s'il n'existe pas
    fs.mkdir(uploadDir, { recursive: true }, (err) => {
      if (err) {
        console.error('Erreur lors de la création du dossier:', err);
        return cb(err);
      }
      cb(null, uploadDir);
    });
  },
  filename: (req, file, cb) => {
    const matricule = req.body.matricule;
    const date = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
    const originalExt = path.extname(file.originalname);
    const filename = `bulletin_${date}_${matricule}${originalExt}`;
    cb(null, filename);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: process.env.MAX_FILE_SIZE || 2 * 1024 * 1024 // 2MB par défaut
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Type de fichier non autorisé. Utilisez PDF, JPEG ou PNG.'));
    }
  }
}).single('bulletinPath');

// Middleware de gestion des erreurs multer
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'Le fichier est trop volumineux (max 2MB)' });
    }
    return res.status(400).json({ error: err.message });
  }
  next(err);
};

// Route d'enregistrement avec validation
router.post('/', validateReservation, (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return next(err);
    }

    const {
      matricule, nom, prenoms, sexe,
      date_naissance, type_enseignement, niveau
    } = req.body;

    // Chemin relatif du fichier pour la base de données
    const bulletin = req.file ? `/uploads/${matricule}/${req.file.filename}` : null;

    const sql = `
      INSERT INTO reservations 
      (matricule, nom, prenoms, sexe, date_naissance, type_enseignement, niveau, bulletin)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
      matricule, nom, prenoms, sexe.toUpperCase(),
      date_naissance, type_enseignement, niveau, bulletin
    ], (err, result) => {
      if (err) {
        console.error("Erreur MySQL :", err);
        // Nettoyage du fichier en cas d'erreur
        if (req.file) {
          const filePath = path.join(__dirname, '../uploads', matricule, req.file.filename);
          fs.unlink(filePath, (unlinkErr) => {
            if (unlinkErr) console.error('Erreur lors de la suppression du fichier:', unlinkErr);
          });
        }
        return res.status(500).json({ error: 'Erreur lors de l\'enregistrement de la réservation' });
      }
      res.status(201).json({ 
        message: 'Réservation enregistrée avec succès',
        id: result.insertId,
        bulletin: bulletin
      });
    });
  });
});

// Route pour récupérer les bulletins d'un matricule
router.get('/:matricule/bulletins', (req, res) => {
  const { matricule } = req.params;
  const uploadDir = path.join(__dirname, '../uploads', matricule);

  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).json({ error: 'Aucun bulletin trouvé pour ce matricule' });
      }
      return res.status(500).json({ error: 'Erreur lors de la lecture des bulletins' });
    }

    const bulletins = files.map(file => ({
      filename: file,
      path: `/uploads/${matricule}/${file}`,
      date: file.split('_')[1], // Extrait la date du nom de fichier
      type: path.extname(file).toLowerCase()
    }));

    res.json(bulletins);
  });
});

router.use(handleMulterError);

module.exports = router;
