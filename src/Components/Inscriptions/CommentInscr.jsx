import React from 'react';
import './CommentInscr.css';

const CommentIscr = () => {
  return (
    <div className="page-container">
     <div className="comment-container">
      <h1>Comment s'inscrire ?</h1>
      <ol className="steps">
        <li>Remplir le formulaire d'inscription en ligne ou sur place.</li>
        <li>Fournir les documents requis : acte de naissance, bulletins, etc.</li>
        <li>Procéder au paiement des frais d’inscription.</li>
        <li>Recevoir la confirmation d’inscription par mail ou SMS.</li>
      </ol>

      <div className="note">
        <strong>Note :</strong> L'inscription est validée uniquement après paiement et vérification des pièces.
      </div>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <a
            href="/MATERNELLE_PRIMAIRE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1e88e5', textDecoration: 'underline' }}
        >
            📄 VOIR LA FICHE DE RENSEIGNEMENT PRIMAIRE & MATERNELLE
        </a>
        </div>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <a
            href="/COLLEGE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1e88e5', textDecoration: 'underline' }}
        >
            📄 VOIR LA FICHE DE RENSEIGNEMENT DU COLLEGE
        </a>
        </div>
    </div>
    

    </div>
  );
};

export default CommentIscr;
