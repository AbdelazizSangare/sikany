import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Reservations from './Components/Reservations/Reservations';

function Accueil({ playState, setPlayState }) {
  return (
    <>
      <Hero />
      <div className="container">
        <Title subTitle="Nos Programmes" title="Ce Que Nous Offrons" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Galerie" title="Photos de l’école" />
        <Campus />
        <Title subTitle="Témoignages" title="Ce que disent nos élèves" />
        <Testimonials />
        <Title subTitle="Contactez-nous" title="Entrons en contact" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
}

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil playState={playState} setPlayState={setPlayState} />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Router>
  );
}

export default App;
