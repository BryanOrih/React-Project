import React from 'react'
import "./index.css"
const BotParameters = () => {
  return (
  <div className='BotParametersContainer'>
    <label htmlFor='BotParameters'>
    VA possible answer parameters
    </label>
    <textarea name="BotParameters" placeholder='Be as specific as possible' type='Color'/>                          
  </div>
  )
}

export default BotParameters