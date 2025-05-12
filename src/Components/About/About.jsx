import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
              {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>A PROPOS DE NOTRE ECOLE</h3>
            <h2>Nourrir Les Dirigeants De Demain Aujourd'hui</h2>
            <p>Notre établissement a pour vocation de former des esprits libres, critiques et engagés. 
            Nous croyons fermement que chaque élève porte en lui le potentiel de devenir un acteur du 
            changement, un leader éclairé, capable de façonner un avenir meilleur.</p>

            <p>Grâce à un encadrement bienveillant, un enseignement rigoureux et des valeurs fortes, 
              nous accompagnons nos élèves dans leur développement académique, humain et citoyen. 
              Aujourd’hui, nous semons les graines du savoir et de la responsabilité pour récolter, demain, des femmes et des hommes prêts à relever les défis de leur époque.</p>

        </div>
    </div>
  )
}

export default About