import React from 'react'
import './Home.css'
import img from '../../assets/prashana.png'
import instagram_img from '../../assets/Instagram.png'
import Youtube_img from '../../assets/youtube.png'


const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <img src={img} alt="" />
          <div className='home-text'>
           Hello It's Me <h1>Prashanna Maharjan</h1>
        
        <div className='Text-changing'> 
          <p className='intro-text'>I'm a</p> 
            <div className='role-container'>
              <span className='role'>Frontend Developer.</span>
              <span className='role'>Freelancer.</span>
              <span className='role'>Photographer.</span>
              <span className='role'>Videographer.</span>
              <span className='role'>Content Creator.</span>
            </div>
            </div>
              <p className='me'>I am a Computer Science graduate passionate about frontend development, combining skills in React, UI/UX design, and creative digital content to build engaging user experiences.</p>
              <a href="https://www.instagram.com/_prashanna.maharjan/"><img src={instagram_img} alt="" /></a>
              <a href="https://www.youtube.com/@prashannamaharjan8328"><img src={Youtube_img} alt="" /></a>
         </div>
      </div>
    </div>
  )
}

export default Home