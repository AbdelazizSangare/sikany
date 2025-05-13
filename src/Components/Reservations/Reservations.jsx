import React from 'react'
import './Reservations.css'
import white_arrow from '../../assets/white-arrow.png'

const Reservations = () => {
  return (
    <div className='reservations'>
      <h2>FORMULAIRE DE RESERVATION</h2>
      <form>
        <label>Votre Nom</label>
        <input type="text" name="name" placeholder="Entrez Votre Nom" required />
        <label>Votre Numéro de Téléphone</label>
        <input type="tel" name="phone" placeholder="Entrez votre Numéro de téléphone" required />
        <label>Ecrivez Votre Message Ici</label>
        <textarea name="message" rows="10" placeholder="Entrez Le Message" required></textarea>
        <button type="submit" className="btn dark-btn">
          Envoyer Maintenant <img src={white_arrow} alt="" />
        </button>
      </form>
    </div>
  )
}

export default Reservations;
