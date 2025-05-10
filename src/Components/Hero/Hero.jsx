import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Une éducation d’excellence au service de l’avenir de vos enfants.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut eius dolorum incidunt fuga expedita laudantium deserunt facilis ipsum ipsam explicabo 
                dolorem nostrum quia iure recusandae, possimus necessitatibus asperiores, placeat sed!</p>
                <button className='btn'>Explorez Plus <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero