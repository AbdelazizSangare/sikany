import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/white-arrow.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Doumbia Yahya</h3>
                                <span>Collège Privé Sikany</span>
                            </div>
                        </div>
                        <p>"Depuis que je suis au Collège Sikany, j’ai beaucoup progressé en mathématiques et en confiance en moi. 
                            Les profs sont à l’écoute et nous encouragent à donner le meilleur de nous-mêmes."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Ouattara Shakira</h3>
                                <span>Collège Privé Sikany</span>
                            </div>
                        </div>
                        <p>"Ce que j’aime ici, c’est l’ambiance familiale et la rigueur. 
                            On apprend dans le respect, et chacun a sa place. 
                            J’ai découvert des passions que je ne connaissais pas grâce aux activités parascolaires."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Fofana Noura</h3>
                                <span>Collège Privé Sikany</span>
                            </div>
                        </div>
                        <p>"Avant de venir ici, j’avais du mal à m’organiser. 
                            Grâce au suivi personnalisé, j’ai appris à mieux gérer mon temps et à devenir plus autonome. 
                            Aujourd’hui, je vise le lycée avec sérénité."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Diane Moustapha</h3>
                                <span>EPV Sikany</span>
                            </div>
                        </div>
                        <p>"Notre classe est calme et propre, et le maître nous aide toujours quand on ne comprend pas. 
                            J’aime apprendre ici parce qu’on a tout ce qu’il faut pour bien travailler. 
                            Je me sens en sécurité et je progresse chaque jour."</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials