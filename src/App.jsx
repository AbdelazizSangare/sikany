import React, { useState } from 'react'
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

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Nos Programmes' title='Ce Que Nous Offrons'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallerie' title='Photos Ecole'/>
        <Campus/>
        <Title subTitle='TEMOIGNAGES' title='Ce Que Disent Nos Elèves'/>
        <Testimonials/>
        <Title subTitle='Contactez-Nous' title='Entrez En Contact'/>
        <Contact/>
        <Footer/>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </div>
  )
}

export default App