import React, { useState } from 'react';
import './Reservations.css';
import white_arrow from '../../assets/white-arrow.png';
import Navbar from '../Navbar/Navbar';

const niveauxParType = {
  Maternelle: ["Petite Section", "Moyenne Section", "Grande Section"],
  Primaire: ["CP1", "CP2", "CE1", "CE2", "CM1", "CM2"],
  Secondaire: ["6e", "5e", "4e", "3e", "2nde", "1ère", "Terminale"],
  "Technique & Professionnel": [
    "CAP", "BEP", "BT", "BAC Technique", "BAC Pro",
    "BTS", "DUT", "DTS", "CQP", "Formation en alternance"
  ],
  Autres: ["Formation Pro", "Cours du soir", "Spécialisation"]
};

const Reservations = () => {
  const [typeEnseignement, setTypeEnseignement] = useState('');
  const [niveau, setNiveau] = useState('');

  return (
    <>
      <Navbar />
      <div className='reservations'>
        <div className='form-container'>
          <h2>FORMULAIRE DE RESERVATION</h2>
          <form>
            <label>Matricule <span className="required">*</span></label>
            <input type="text" name="matricule" placeholder="Entrez Votre Matricule" required />

            <div className="form-row">
              <div className="form-group">
                <label>Nom <span className="required">*</span></label>
                <input type="text" name="nom" placeholder="Entrez Votre Nom" required />
              </div>
              <div className="form-group">
                <label>Prénoms <span className="required">*</span></label>
                <input type="text" name="prenoms" placeholder="Entrez Vos Prénoms" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Sexe <span className="required">*</span></label>
                <select name="sexe" required>
                  <option value="">Sélectionnez un sexe</option>
                  <option value="Masculin">Masculin</option>
                  <option value="Féminin">Féminin</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date de Naissance <span className="required">*</span></label>
                <input type="date" name="date_naissance" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Type d’Enseignement <span className="required">*</span></label>
                <select
                  name="type_enseignement"
                  value={typeEnseignement}
                  onChange={(e) => {
                    setTypeEnseignement(e.target.value);
                    setNiveau('');
                  }}
                  required
                >
                  <option value="">Sélectionnez un type</option>
                  {Object.keys(niveauxParType).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Niveau <span className="required">*</span></label>
                <select
                  name="niveau"
                  value={niveau}
                  onChange={(e) => setNiveau(e.target.value)}
                  required
                  disabled={!typeEnseignement}
                >
                  <option value="">Sélectionnez un niveau</option>
                  {typeEnseignement &&
                    niveauxParType[typeEnseignement].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Bulletin <span className="required">*</span></label>
                <input type="file" name="bulletin" required />
              </div>
            </div>

            <button type="submit" className="btn dark-btn">
              Envoyer Maintenant <img src={white_arrow} alt="flèche blanche" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reservations;
