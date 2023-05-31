import React, { useContext } from 'react'
import './index.css'
import {MainContext} from '../../context/MainContext'

const Home = () => {
    const {logo} = useContext(MainContext)
  return (
    <>
    <div id='maidContainer'>
        <img id="maid" src={require('../../images/maid.png')}/>
    </div>
    <div className='homepageLogo'>
      {logo}
    </div>
    <div className='BorderBox'>
        
    </div>
    </>
  )
}

export default Home