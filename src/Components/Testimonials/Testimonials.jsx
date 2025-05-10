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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, 
                            cum accusamus! Facere et quas amet eius illum nam 
                            deserunt accusamus esse, dolorum, aliquam voluptatum ad 
                            doloribus reiciendis. Optio, a corrupti.</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, 
                            cum accusamus! Facere et quas amet eius illum nam 
                            deserunt accusamus esse, dolorum, aliquam voluptatum ad 
                            doloribus reiciendis. Optio, a corrupti.</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, 
                            cum accusamus! Facere et quas amet eius illum nam 
                            deserunt accusamus esse, dolorum, aliquam voluptatum ad 
                            doloribus reiciendis. Optio, a corrupti.</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, 
                            cum accusamus! Facere et quas amet eius illum nam 
                            deserunt accusamus esse, dolorum, aliquam voluptatum ad 
                            doloribus reiciendis. Optio, a corrupti.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials