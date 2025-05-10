import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>A PROPOS DE NOTRE ECOLE</h3>
            <h2>Nourrir Les Dirigeants De Demain Aujourd'hui</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut eius dolorum incidunt fuga expedita laudantium deserunt facilis ipsum ipsam explicabo 
                dolorem nostrum quia iure recusandae, possimus necessitatibus asperiores, placeat sed!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut eius dolorum incidunt fuga expedita laudantium deserunt facilis ipsum ipsam explicabo 
                dolorem nostrum quia iure recusandae, possimus necessitatibus asperiores, placeat sed!</p>
        </div>
    </div>
  )
}

export default About