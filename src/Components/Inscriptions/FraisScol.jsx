// src/Inscription/FraisScol.jsx
import React from 'react';
import './FraisScol.css';

const FraisScol = () => {
  return (
    <div className="page-container">
        <div className="frais-container">
      <h1>Frais de Scolarité</h1>

      <table className="frais-table">
        <thead>
          <tr>
            <th>Niveau</th>
            <th>Frais d'inscription</th>
            <th>Frais de scolarité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maternelle</td>
            <td>55 000 FCFA</td>
            <td>180 000 FCFA</td>
          </tr>
          <tr>
            <td>Primaire</td>
            <td>70 000 FCFA</td>
            <td>210 000 FCFA</td>
          </tr>
          <tr>
            <td>College 1er Cycle Affecté</td>
            <td>95 000 FCFA</td>
            <td>120 000 FCFA</td>
          </tr>
          <tr>
            <td>College 1er Cycle Non Affecté</td>
            <td>95 000 FCFA</td>
            <td>230 000 FCFA</td>
          </tr>
        </tbody>
      </table>

      <p className="info">
        <strong>Note :</strong> Les frais sont payables en 3 tranches. Des réductions sont possibles pour les fratries.
      </p>
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

export default FraisScol;
