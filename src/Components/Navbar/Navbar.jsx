import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Accueil</li>
            <li>Programme</li>
            <li>A Propos</li>
            <li>Campus</li>
            <li>Témoignages</li>
            <li><button className='btn'>Contactez-Nous</button></li>
        </ul>
    </nav>
  )
}

export default Navbar