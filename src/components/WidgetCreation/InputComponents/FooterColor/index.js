import React, { useContext, useState } from 'react'
import './index.css'
import { MainContext } from '../../../../context/MainContext'


const FooterColor = () => {
  const {setFooterColor} = useContext(MainContext)

  const [color, setColor] = useState("")
  const [input, setInput] = useState("")

  const handleColor = (e) =>{
    setColor(e.target.value)
    setFooterColor(e.target.value)
    setInput(e.target.value.toUpperCase())
  }
  const handleInput = (e) =>{
    let newInput = e.target.value
    if(newInput.length > 7) return
    setInput(newInput)
    while(newInput.length < 7) newInput = "0" + newInput
    if(newInput.includes("#")) newInput = newInput.replace("#","0")
    newInput = "#" + newInput.substring(1)
    setFooterColor(e.target.value)
    setColor(newInput)
  }
  return (
  <div className='FooterColorContainer'>
    <label htmlFor='FooterColor'>
    Color of Footer
    </label>
    <div name="FooterColor" className='Color-Container'>
      <input type='color' onChange={handleColor} value={color}/>                          
      <input type='text' value={input} onChange={handleInput}/>
    </div>                           
  </div>
  )
}

export default FooterColor