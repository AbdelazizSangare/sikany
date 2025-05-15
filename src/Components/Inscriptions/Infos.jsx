// src/Inscription/Infos.jsx
import React from 'react';
import './Infos.css';

const Infos = () => {
  return (
    <div className="page-container">
        <div className="infos-container">
      <h1>Informations Pratiques</h1>

      <section className="infos-section">
        <h2>Horaires d’ouverture</h2>
        <p>
          Du lundi au vendredi : <strong>8h00 à 17h00</strong><br />
          Samedi : <strong>8h00 à 12h00</strong>
        </p>
      </section>

      <section className="infos-section">
        <h2>Documents à fournir</h2>
        <ul>
          <li>Photocopie de l’acte de naissance</li>
          <li>2 photos d’identité</li>
          <li>Certificat de scolarité ou bulletin de l’année précédente</li>
          <li>Fiche d’inscription remplie (disponible sur place)</li>
        </ul>
      </section>

      <section className="infos-section">
        <h2>Contact</h2>
        <p>
          📞 <strong>+225 0705903819 / +225 0545089895</strong><br />
          📧 <a href="mailto:gsikanysongon@gmail.com">gsikanysongon@gmail.com</a><br />
          📍 Songon km17 Institut Pasteur Carrefour Ecole
        </p>
      </section>
    </div>
    </div>
  );
};

export default Infos;
