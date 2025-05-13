import React from 'react'
import './Reservations.css'
import white_arrow from '../../assets/white-arrow.png'
import Navbar from '../Navbar/Navbar'

const Reservations = () => {
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
            <d  iv className="form-group">
              <label>Sexe <span className="required">*</span></label>
                <select name="sexe" required>
                <option value="">Sélectionnez un sexe</option>
                <option value="Masculin">Masculin</option>
                <option value="Féminin">Féminin</option>
                </select>
            </d>
            <div className="form-group">
              <label>Date de Naissance <span className="required">*</span></label>
              <input type="date" name="date_naissance" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Niveau <span className="required">*</span></label>
              <input type="text" name="classe" required />
            </div>
            <div className="form-group">
              <label>Bulletin <span className="required">*</span></label>
              <input type="file" name="bulletin" required />
            </div>
          </div>

          <button type="submit" className="btn dark-btn">
            Envoyer Maintenant <img src={white_arrow} alt="" />
          </button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Reservations;
