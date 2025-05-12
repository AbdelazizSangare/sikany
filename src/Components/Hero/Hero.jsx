import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Une éducation d’excellence au service de l’avenir de vos enfants.</h1>
            <p>Depuis sa création, le Groupe Scolaire Sikany œuvre pour une éducation moderne, rigoureuse et inclusive. 
              Notre établissement accueille les élèves de la maternelle au Secondaire dans un 
              cadre propice à l’apprentissage, au développement personnel et à l’éveil citoyen.</p>
                <button className='btn'>Explorez Plus <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero