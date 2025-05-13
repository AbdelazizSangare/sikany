const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../db');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage: storage });

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

  const bulletin = req.file?.filename || null;

  const sql = `INSERT INTO reservations 
    (matricule, nom, prenoms, sexe, date_naissance, type_enseignement, niveau, bulletin)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [matricule, nom, prenoms, sexe, date_naissance, type_enseignement, niveau, bulletin], (err, result) => {
    if (err) {
      console.error("Erreur MySQL :", err);
      return res.status(500).send('Erreur base de données');
    }
    res.status(200).send('Réservation enregistrée');
  });
});

module.exports = router;
