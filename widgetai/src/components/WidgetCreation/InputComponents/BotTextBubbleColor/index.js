import React from 'react'

const BotTextBubbleColor = () => {
  const handleColor = (e) =>{
    console.dir(e.target.value)
  }
  return (
  <div className='BotTxtBbColorContainer'>
    <label htmlFor='BotTextBubbleColor'>
    Select The color of your VA Text Color
    </label>
    <input name="BotTextBubbleColor" type='Color' onChange={handleColor}/>                          
  </div>
  )
}

export default BotTextBubbleColor