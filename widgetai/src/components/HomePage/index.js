import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {MainContext} from '../../context/MainContext'

const Home = () => {
    const {logo} = useContext(MainContext)
  return (
    <>
    <div className='homepageLogo'>
      {logo}
    </div>
    <div className='BorderBox'>
        <p>
        Design your own personalized assistant widget, 
        tailored to your needs, and unleash your creativity 
        in crafting a seamless extension of efficiency and functionality
        that reflects your unique style and desires.
        </p>
        <Link to='./CreateWidget'><button>Begin</button></Link>
    </div>
    <div className='maidContainer'>
      <img id="maid" src={require('../../images/maid.png')}/>
    </div>
    </>
  )
}

export default Home