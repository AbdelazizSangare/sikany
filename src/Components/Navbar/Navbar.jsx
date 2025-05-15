import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 840);
  const location = useLocation();

  const isAccueil = location.pathname === '/';

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

  const handleNavItem = (to, label) => {
    return isAccueil ? (
      <ScrollLink to={to} smooth={true} offset={-260} duration={500}>{label}</ScrollLink>
    ) : (
      <RouterLink to="/">{label}</RouterLink>
    );
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <RouterLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </RouterLink>
      <img src={menu_icon} alt="Menu" className={`menu-icon ${mobileMenu ? 'active' : ''}`} onClick={toggleMenu}/>
      <ul className={mobileMenu ? 'show' : 'hide-mobile-menu'}>
        <li>{handleNavItem('hero', 'Accueil')}</li>

        <li className="has-submenu">
          <span onClick={() => isMobile && toggleSubmenu('actualites')}>Actualités</span>
          <ul className={`submenu ${openSubmenus['actualites'] ? 'show' : ''}`}>
            <li>{handleNavItem('decoupage', 'Découpage année scolaire')}</li>
            <li>{handleNavItem('actu', 'Actus nationales et internationales')}</li>
          </ul>
        </li>

        <li className="has-submenu">
          <span onClick={() => isMobile && toggleSubmenu('inscriptions')}>Inscriptions</span>
          <ul className={`submenu ${openSubmenus['inscriptions'] ? 'show' : ''}`}>
            <li><RouterLink to="/comment">Comment S'inscrire</RouterLink></li>
            <li><RouterLink to="/frais">Frais De Scolarité</RouterLink></li>
            <li><RouterLink to="/infos">Infos Rentrée</RouterLink></li>
            <li><RouterLink to="/reservations">Réservations</RouterLink></li>
          </ul>
        </li>

        <li className="has-submenu">
          <span onClick={() => isMobile && toggleSubmenu('vie')}>Vie scolaire</span>
          <ul className={`submenu ${openSubmenus['vie'] ? 'show' : ''}`}>
            <li>{handleNavItem('equipements', 'Équipements')}</li>
            <li>{handleNavItem('resultats', 'Résultats examens')}</li>
            <li>
              <a href="http://www.applicationvh.com/sikany/parent" target="_blank" rel="noopener noreferrer">
                Infos élèves
              </a>
            </li>
          </ul>
        </li>

        <li>{handleNavItem('contact', 'Contactez-Nous')}</li>
        <li>{handleNavItem('about', 'À propos')}</li>
        <li>{handleNavItem('admin', 'Administration')}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
