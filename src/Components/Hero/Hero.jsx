import React from 'react'
import './Hero.css'
import profile_img from '../../assets/hero.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img}></img>
        <h1><span>Im Ankith Naik,</span>Software Developer from Dharwad</h1>
        <p>Hello I Am From Hubli Shri Dharmastala Manjunatheshwara College Of Engineering And Technology,Dharwad</p>
        <div className='hero-action'>
           <div className="hero-connect">
               <AnchorLink  className='anchor-link'  href='#contact'>Connect With Me</AnchorLink>
           </div>
           <div className="hero-resume">
                My Resume
           </div>
        </div>
    </div>
  )
}

export default Hero