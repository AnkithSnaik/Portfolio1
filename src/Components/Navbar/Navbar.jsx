import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  const [menu,setMenu] = useState("About Me");
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' offset={70}  href='#home'><p onClick={()=>setMenu("home")}>Home</p>{menu=="home"?<img src={underline}></img>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("About Me")}>About Me</p>{menu=="About Me"?<img src={underline}></img>:<></>}</AnchorLink></li>
            <li><AnchorLink  className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("Services")}>Services</p>{menu=="Services"?<img src={underline}></img>:<></>}</AnchorLink></li>
            <li><AnchorLink  className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("Portfolio")}>Portfolio</p>{menu=="Portfolio"?<img src={underline}></img>:<></>}</AnchorLink></li>
            <li><AnchorLink  className='anchor-link'  href='#contact'><p onClick={()=>setMenu("Contact")}>Contact</p>{menu=="Contact"?<img src={underline}></img>:<></>}</AnchorLink></li>
        </ul>
        <div className="nav-connect">
            <AnchorLink  className='anchor-link'  href='#contact'>Connect With Me</AnchorLink>
        </div>
    </div>
  )
}

export default Navbar