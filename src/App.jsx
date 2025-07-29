import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Myprojects from './Components/Myprojects/Myprojects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Services/>
       <Myprojects/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App