import React from 'react'
import './Myprojects.css'
import myproject from '../../assets/theme_pattern.svg'
import mydata from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'
const Myprojects = () => {
  return (
    <div id="work" className='mywork'>
        <div className='myworktitle'>
            <h1>My latest work</h1>
            <img src={myproject}></img>
        </div>
        <div className="mywork-container">
                {mydata.map((data,index)=>{
                    return <img key={index} src={data.w_img}></img>
                })}
        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow}></img>
        </div>
    </div>
  )
}

export default Myprojects