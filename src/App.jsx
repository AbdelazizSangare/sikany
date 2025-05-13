// App.jsx
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Reservations from './Components/Reservations/Reservations'

const Home = ({ setPlayState }) => (
  <>
    <Hero />
    <div className="container">
      <Title subTitle="Nos Programmes" title="Ce Que Nous Offrons" />
      <Programs />
      <About setPlayState={setPlayState} />
      <Title subTitle="Gallerie" title="Photos Ecole" />
      <Campus />
      <Title subTitle="TEMOIGNAGES" title="Ce Que Disent Nos Elèves" />
      <Testimonials />
      <Title subTitle="Contactez-Nous" title="Entrez En Contact" />
      <Contact />
      <Footer />
      <VideoPlayer playState={setPlayState} setPlayState={setPlayState} />
    </div>
  </>
)

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setPlayState={setPlayState} />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Router>
  );
};

export default App;
