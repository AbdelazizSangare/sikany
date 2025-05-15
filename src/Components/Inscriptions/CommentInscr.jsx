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
    </div>
    </div>
  );
};

export default CommentIscr;
