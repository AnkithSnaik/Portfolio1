import React from 'react'
import './About.css'
import themepattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/hero.png'
const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={themepattern}></img>
      </div>
      <div className='about-section'>
         <div className="about-left">
            <img src={profile_img}></img>
         </div>
         <div className="about-right">
            <div className="about-para">
                <p>Im Ankith Naik, a passionate Computer Science student with a strong foundation in Java, web development, and database management. I enjoy building efficient and user-friendly applications, and I'm always eager to learn new technologies to grow as a developer.</p>
                <p>Im a quick learner with a problem-solving mindset and a keen attention to detail. My strengths include logical thinking, strong debugging skills, and the ability to work effectively both independently and in a team. I strive for clean code and continuous improvement in every project I take on.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>JAVA</p><hr style={{width:'50%'}}></hr>
                </div>
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:'70%'}}></hr>
                </div>
                <div className="about-skill">
                    <p>JAVASCRIPT</p><hr style={{width:'60%'}}></hr>
                </div>
                <div className="about-skill">
                    <p>REACT JS</p><hr style={{width:'50%'}}></hr>
                </div>
            </div>
         </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr></hr>
         <div className="about-achievement">
            <h1>10+</h1>
            <p>Projects Completed</p>
        </div>
        <hr/>
         <div className="about-achievement">
            <h1>6+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About