import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  
  const [result, setResult] = React.useState(""); 
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "73779a12-7d43-4d6a-aba6-d6b3657840c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Envoyé !");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Envoyez-Nous Un Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Aliquam earum, molestiae deleniti voluptas facilis nobis nihil fuga et nostrum est veritatis iure. 
                Commodi culpa quas sapiente, pariatur dolorem reiciendis quos.</p>
            <ul>
                <li><img src={mail_icon} alt="" />gsikanysongon@gmail.com</li>
                <li><img src={phone_icon} alt="" />+225 0705903819 / +225 0545089895</li>
                <li><img src={location_icon} alt="" />Songon Km 17 Institut Pasteur Carrefour Ecole</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Votre Nom</label>
                <input type="text" name='name' placeholder='Entrez Votre Nom' required/>
                <label >Votre Numéro de Téléphone</label>
                <input type="tel" name='phone' placeholder='Entrez votre Numéro de téléphone' required/>
                <label >Ecrivez Votre Message Ici</label>
                <textarea name="message" rows="10" placeholder='Entrez Le Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Envoyer Maintenant <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact