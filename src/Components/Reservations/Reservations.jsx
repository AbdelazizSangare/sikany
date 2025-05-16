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
  const [formData, setFormData] = useState({
    matricule: '',
    nom: '',
    prenoms: '',
    sexe: '',
    date_naissance: '',
    type_enseignement: '',
    niveau: '',
    bulletinPath: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !['application/pdf', 'image/jpeg', 'image/png'].includes(file.type)) {
      alert("Fichier non autorisé. Veuillez choisir un PDF, JPEG ou PNG.");
      return;
    }
    if (file && file.size > 2 * 1024 * 1024) {
      alert("Fichier trop volumineux (max 2 Mo)");
      return;
    }
    setFormData(prev => ({ ...prev, bulletinPath: file }));
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      type_enseignement: value,
      niveau: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await fetch('https://sikany.onrender.com/api/reservations', {
        method: 'POST',
        body: data
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          matricule: '',
          nom: '',
          prenoms: '',
          sexe: '',
          date_naissance: '',
          type_enseignement: '',
          niveau: '',
          bulletinPath: null
        });
      } else {
        console.log(await response.text());
        alert("Erreur lors de l'envoi du formulaire.");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      alert("Erreur réseau : " + error.message);
    }
  };

  const isFormValid = Object.values(formData).every(val => val !== '' && val !== null);

  return (
    <>
      <Navbar />
      <div className='reservations'>
        <div className='form-container'>
          <h2>FORMULAIRE DE RÉSERVATION</h2>
          {submitted && (
            <p className="success-message">✅ Votre réservation a été envoyée avec succès !</p>
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="matricule">Matricule <span className="required">*</span></label>
            <input
              id="matricule"
              type="text"
              name="matricule"
              value={formData.matricule}
              onChange={handleChange}
              placeholder="Entrez votre matricule"
              required
            />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nom">Nom <span className="required">*</span></label>
                <input
                  id="nom"
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Entrez votre nom"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="prenoms">Prénoms <span className="required">*</span></label>
                <input
                  id="prenoms"
                  type="text"
                  name="prenoms"
                  value={formData.prenoms}
                  onChange={handleChange}
                  placeholder="Entrez vos prénoms"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sexe">Sexe <span className="required">*</span></label>
                <select
                  id="sexe"
                  name="sexe"
                  value={formData.sexe}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un sexe</option>
                  <option value="Masculin">Masculin</option>
                  <option value="Féminin">Féminin</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date_naissance">Date de Naissance <span className="required">*</span></label>
                <input
                  id="date_naissance"
                  type="date"
                  name="date_naissance"
                  value={formData.date_naissance}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="type_enseignement">Type d’Enseignement <span className="required">*</span></label>
                <select
                  id="type_enseignement"
                  name="type_enseignement"
                  value={formData.type_enseignement}
                  onChange={handleTypeChange}
                  required
                >
                  <option value="">Sélectionnez un type</option>
                  {Object.keys(niveauxParType).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="niveau">Niveau <span className="required">*</span></label>
                <select
                  id="niveau"
                  name="niveau"
                  value={formData.niveau}
                  onChange={handleChange}
                  required
                  disabled={!formData.type_enseignement}
                >
                  <option value="">Sélectionnez un niveau</option>
                  {formData.type_enseignement &&
                    niveauxParType[formData.type_enseignement].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bulletin">Bulletin <span className="required">*</span></label>
                <input
                  id="bulletin"
                  type="file"
                  name="bulletinPath"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn dark-btn" disabled={!isFormValid}>
              Envoyer Maintenant <img src={white_arrow} alt="flèche blanche" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reservations;
