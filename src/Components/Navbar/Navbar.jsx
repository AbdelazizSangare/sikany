import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  const toggleSubmenu = (menuKey) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const isMobile = window.innerWidth <= 840;

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Accueil</Link></li>

        <li className="has-submenu">
          <span onClick={() => isMobile && toggleSubmenu('actualites')}>
            Actualités {isMobile && <span className="arrow">{openSubmenus['actualites'] ? '-' : '+'}</span>}
          </span>
          <ul className={`submenu ${openSubmenus['actualites'] ? 'show' : ''}`}>
            <li><Link to="decoupage" smooth={true} offset={-260} duration={500}>Découpage année scolaire</Link></li>
            <li><Link to="actu" smooth={true} offset={-260} duration={500}>Actus nationales et internationales</Link></li>
          </ul>
        </li>

        <li className="has-submenu">
          <span onClick={() => isMobile && toggleSubmenu('inscriptions')}>
            Inscriptions {isMobile && <span className="arrow">{openSubmenus['inscriptions'] ? '-' : '+'}</span>}
          </span>
          <ul className={`submenu ${openSubmenus['inscriptions'] ? 'show' : ''}`}>
            <li><Link to="inscription" smooth={true} offset={-260} duration={500}>Comment s'inscrire</Link></li>
            <li><Link to="frais" smooth={true} offset={-260} duration={500}>Frais de scolarité</Link></li>
            <li><Link to="rentree" smooth={true} offset={-260} duration={500}>Infos rentrée</Link></li>
            <li><Link to="reservations" smooth={true} offset={-260} duration={500}>Réservations</Link></li>
          </ul>
        </li>

        <li className="has-submenu">
          <span onClick={() => isMobile && toggleSubmenu('vie')}>
            Vie scolaire {isMobile && <span className="arrow">{openSubmenus['vie'] ? '-' : '+'}</span>}
          </span>
          <ul className={`submenu ${openSubmenus['vie'] ? 'show' : ''}`}>
            <li><Link to="equipements" smooth={true} offset={-260} duration={500}>Équipements</Link></li>
            <li><Link to="resultats" smooth={true} offset={-260} duration={500}>Résultats examens</Link></li>
            <li><Link to="infos-eleves" smooth={true} offset={-260} duration={500}><a href="http://www.applicationvh.com/sikany/parent" 
            target="_blank" rel="noopener noreferrer">Infos élèves</a></Link></li>
          </ul>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">
            Contactez-Nous
          </Link>
        </li>
        <li><Link to='about' smooth={true} offset={150} duration={500}>À propos</Link></li>
        <li><Link to='admin' smooth={true} offset={-260} duration={500}>Administration</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
