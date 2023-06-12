import React, { useContext, useState } from 'react'
import './index.css'
import { MainContext } from '../../../../context/MainContext'

const XbuttonColor = () => {
  const {setXBtnColor} = useContext(MainContext)

  const [color, setColor] = useState("")
  const [input, setInput] = useState("")

  const handleColor = (e) =>{
    setColor(e.target.value)
    setXBtnColor(e.target.value)
    setInput(e.target.value.toUpperCase())
  }
  const handleInput = (e) =>{
    let newInput = e.target.value
    if(newInput.length > 7) return
    setInput(newInput)
    while(newInput.length < 7) newInput = "0" + newInput
    if(newInput.includes("#")) newInput = newInput.replace("#","0")
    newInput = "#" + newInput.substring(1)
    setXBtnColor(e.target.value)
    setColor(newInput)
  }
  return (
  <div className='XbuttonColorContainer'>
    <label htmlFor='XbuttonColor'>
    Select Your cancel button color
    </label>
    <div name="XbuttonColor" className='Color-Container'>
      <input type='color' onChange={handleColor} value={color}/>                          
      <input type='text' value={input} onChange={handleInput}/>
    </div>                              
  </div>
  )
}

export default XbuttonColor