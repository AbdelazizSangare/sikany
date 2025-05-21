import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Envoi en cours...");
    
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message envoyé avec succès !");
        event.target.reset();
      } else {
        throw new Error(data.message || "Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setResult(error.message || "Une erreur est survenue lors de l'envoi du message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Envoyez-Nous Un Message <img src={msg_icon} alt="" /></h3>
        <p>Vous avez une question ou souhaitez inscrire votre enfant ? Nous sommes à votre écoute.</p>
        <ul>
          <li><img src={mail_icon} alt="" />gsikanysongon@gmail.com</li>
          <li><img src={phone_icon} alt="" />+225 0705903819 / +225 0545089895</li>
          <li><img src={location_icon} alt="" />Songon Km 17 Institut Pasteur Carrefour Ecole</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Votre Nom</label>
          <input 
            type="text" 
            name='name' 
            placeholder='Entrez Votre Nom' 
            required
            disabled={isSubmitting}
          />
          <label>Votre Numéro de Téléphone</label>
          <input 
            type="tel" 
            name='phone' 
            placeholder='Entrez votre Numéro de téléphone' 
            required
            disabled={isSubmitting}
          />
          <label>Ecrivez Votre Message Ici</label>
          <textarea 
            name="message" 
            rows="10" 
            placeholder='Entrez Le Message' 
            required
            disabled={isSubmitting}
          ></textarea>
          <button 
            type='submit' 
            className='btn dark-btn'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer Maintenant'} 
            <img src={white_arrow} alt="" />
          </button>
        </form>
        {result && (
          <div className={`result-message ${result.includes('succès') ? 'success' : 'error'}`}>
            {result}
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact