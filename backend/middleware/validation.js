const { body, validationResult } = require('express-validator');

// Middleware de validation pour les messages de contact
const validateContact = [
  // Validation du nom
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Le nom doit contenir entre 2 et 100 caractères')
    .escape(),

  // Validation de l'email
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email invalide')
    .normalizeEmail(),

  // Validation du message
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Le message doit contenir entre 10 et 1000 caractères')
    .escape(),

  // Middleware de vérification des erreurs
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Données invalides',
        details: errors.array().map(err => ({
          field: err.path,
          message: err.msg
        }))
      });
    }
    next();
  }
];

// Middleware de validation pour les fichiers uploadés
const validateFile = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Aucun fichier n\'a été uploadé' });
  }

  // Vérifier la taille du fichier
  const maxSize = process.env.MAX_FILE_SIZE || 2 * 1024 * 1024; // 2MB par défaut
  if (req.file.size > maxSize) {
    return res.status(400).json({ 
      error: `Le fichier est trop volumineux. Taille maximale: ${maxSize / 1024 / 1024}MB` 
    });
  }

  // Vérifier le type MIME
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (!allowedTypes.includes(req.file.mimetype)) {
    return res.status(400).json({ 
      error: 'Type de fichier non autorisé. Types acceptés: JPEG, PNG, PDF' 
    });
  }

  next();
};

module.exports = {
  validateContact,
  validateFile
}; 