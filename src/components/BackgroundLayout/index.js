import React from 'react'
import './index.css'
const Background = () => {
  return (
    <div id="imageContainer">
        <img className="vines" id="leftVine" src={require('../../images/vineLeft.png')}/>
        <img className="vines" id="rightVine" src={require('../../images/vineRight.png')}/>
    </div>
  )
}

export default Background