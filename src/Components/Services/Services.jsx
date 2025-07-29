import React from 'react'
import './Services.css'
import theme from '../../assets/theme_pattern.svg'
import servicesdata from '../../assets/services_data'
import Arrow from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id="services" className='services'>
         <div className="services-title">
            <h1>My Services</h1>
            <img src={theme}></img>
         </div>
         <div className="services-container">
            {servicesdata.map((service,index)=>{
                  return <div key={index}className="services-formate">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={Arrow}></img>
                    </div>
                  </div>
            })}
         </div>
    </div>
  )
}

export default Services