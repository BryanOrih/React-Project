import React, { useContext, useState } from 'react'
import './index.css'
import { MainContext } from '../../../../context/MainContext'

const UserTextBubbleColor = () => {
  const {setUserTxtBubble} = useContext(MainContext)

  const [color, setColor] = useState("")
  const [input, setInput] = useState("")

  const handleColor = (e) =>{
    setUserTxtBubble(e.target.value)
    setColor(e.target.value)
    setInput(e.target.value.toUpperCase())
  }
  const handleInput = (e) =>{
    let newInput = e.target.value
    if(newInput.length > 7) return
    setInput(newInput)
    while(newInput.length < 7) newInput = "0" + newInput
    if(newInput.includes("#")) newInput = newInput.replace("#","0")
    newInput = "#" + newInput.substring(1)
    setUserTxtBubble(e.target.value)
    setColor(newInput)
  }
  return (
  <div className='UserTxtBubbleColorContainer'>
    <label htmlFor='UserTextBubbleColor'>
    Select Your User Text Bubble Color
    </label>  
    <div name="UserTextBubbleColor" className='Color-Container'>
      <input type='color' onChange={handleColor} value={color}/>                          
      <input type='text' value={input} onChange={handleInput}/>
    </div>                       
  </div>
  )
}

export default UserTextBubbleColor