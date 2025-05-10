import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Nos Programmes' title='Ce Que Nous Offrons'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallerie' title='Photos Ecole'/>
        <Campus/>
        <Title subTitle='TEMOIGNAGES' title='Ce Que Disent Nos Elèves'/>
        <Testimonials/>
        <Title subTitle='Contactez-Nous' title='Entrez En Contact'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App