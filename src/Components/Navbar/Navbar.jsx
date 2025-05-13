// Navbar.jsx
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 840);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 840);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  const toggleSubmenu = (menuKey) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><ScrollLink to="hero" smooth={true} offset={0} duration={500}>Accueil</ScrollLink></li>

        <li className="has-submenu">
          <span onClick={() => isMobile && toggleSubmenu('actualites')}>Actualités</span>
          <ul className={`submenu ${openSubmenus['actualites'] ? 'show' : ''}`}>
            <li><ScrollLink to="decoupage" smooth={true} offset={-260} duration={500}>Découpage année scolaire</ScrollLink></li>
            <li><ScrollLink to="actu" smooth={true} offset={-260} duration={500}>Actus nationales et internationales</ScrollLink></li>
          </ul>
        </li>

        <li className="has-submenu">
          <span onClick={() => isMobile && toggleSubmenu('inscriptions')}>Inscriptions</span>
          <ul className={`submenu ${openSubmenus['inscriptions'] ? 'show' : ''}`}>
            <li><ScrollLink to="inscription" smooth={true} offset={-260} duration={500}>Comment s'inscrire</ScrollLink></li>
            <li><ScrollLink to="frais" smooth={true} offset={-260} duration={500}>Frais de scolarité</ScrollLink></li>
            <li><ScrollLink to="rentree" smooth={true} offset={-260} duration={500}>Infos rentrée</ScrollLink></li>
            <li>
              <RouterLink to="/reservations">Réservations</RouterLink>
            </li>
          </ul>
        </li>

        <li className="has-submenu">
          <span onClick={() => isMobile && toggleSubmenu('vie')}>Vie scolaire</span>
          <ul className={`submenu ${openSubmenus['vie'] ? 'show' : ''}`}>
            <li><ScrollLink to="equipements" smooth={true} offset={-260} duration={500}>Équipements</ScrollLink></li>
            <li><ScrollLink to="resultats" smooth={true} offset={-260} duration={500}>Résultats examens</ScrollLink></li>
            <li>
              <a href="http://www.applicationvh.com/sikany/parent" target="_blank" rel="noopener noreferrer">
                Infos élèves
              </a>
            </li>
          </ul>
        </li>

        <li><ScrollLink to="contact" smooth={true} offset={-260} duration={500} className="btn">Contactez-Nous</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} offset={150} duration={500}>À propos</ScrollLink></li>
        <li><ScrollLink to="admin" smooth={true} offset={-260} duration={500}>Administration</ScrollLink></li>
      </ul>
      <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
