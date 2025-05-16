const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../db');
const router = express.Router();

// Stockage temporaire (compatible Render)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, '/tmp/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (['.pdf', '.jpg', '.jpeg', '.png'].includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Fichier non autorisé'));
    }
  }
});

// Enregistrement de réservation
router.post('/', upload.single('bulletinPath'), (req, res) => {
  const {
    matricule,
    nom,
    prenoms,
    sexe,
    date_naissance,
    type_enseignement,
    niveau
  } = req.body;

  const bulletin = req.file ? `/tmp/${req.file.filename}` : null;

  const sql = `
    INSERT INTO reservations 
    (matricule, nom, prenoms, sexe, date_naissance, type_enseignement, niveau, bulletin)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    matricule,
    nom,
    prenoms,
    sexe,
    date_naissance,
    type_enseignement,
    niveau,
    bulletin
  ], (err, result) => {
    if (err) {
      console.error("Erreur MySQL :", err);
      return res.status(500).send('Erreur base de données');
    }
    res.status(200).send('Réservation enregistrée avec succès');
  });
});

module.exports = router;
