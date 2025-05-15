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
            <td>CP1 - CP2</td>
            <td>5 000 FCFA</td>
            <td>60 000 FCFA</td>
          </tr>
          <tr>
            <td>CE1 - CE2</td>
            <td>5 000 FCFA</td>
            <td>65 000 FCFA</td>
          </tr>
          <tr>
            <td>CM1 - CM2</td>
            <td>5 000 FCFA</td>
            <td>70 000 FCFA</td>
          </tr>
        </tbody>
      </table>

      <p className="info">
        <strong>Note :</strong> Les frais sont payables en 3 tranches. Des réductions sont possibles pour les fratries.
      </p>
    </div>
    </div>
  );
};

export default FraisScol;
