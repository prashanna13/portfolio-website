import React from 'react'
import './sanish.css'
import sanish1 from '../../../assets/project/sanish/1.jpg'
import sanish2 from '../../../assets/project/sanish/2.jpg'
import sanish3 from '../../../assets/project/sanish/3.jpg'
import sanish4 from '../../../assets/project/sanish/4.jpg'
import sanish5 from '../../../assets/project/sanish/5.jpg'
import sanish6 from '../../../assets/project/sanish/6.jpg'
import sanish7 from '../../../assets/project/sanish/7.jpg'
import sanish8 from '../../../assets/project/sanish/8.jpg'
import { Link } from 'react-router'

const sanish = () => {
  return (
    <div className='sanish'>
        <h1><u>Photos Of Sanish Weds Shahista</u></h1>
    <div className='sanish-photos'>
        <img src={sanish1} alt="" />
        <img src={sanish5} alt="" />
        <img src={sanish2} alt="" />
        <img src={sanish4} alt="" />
        <img src={sanish6} alt="" />
        <img src={sanish7} alt="" />
        <img src={sanish3} alt="" />
        <img src={sanish8} alt="" />
    </div>
        <Link to="/" className="card__button">Back</Link> {/*is connected to  <Route path="/" element={<Layout> <Homelayout /></Layout>} />  in App.jsx*/}
    </div>
  )
}

export default sanish