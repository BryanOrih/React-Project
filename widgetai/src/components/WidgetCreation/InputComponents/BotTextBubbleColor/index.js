import React from 'react'

const BotTextBubbleColor = () => {
  return (
  <div className='BotTxtBbColorContainer'>
    <label htmlFor='BotTextBubbleColor'>
    Select The color of your VA Text Color
    </label>
    <input name="BotTextBubbleColor" type='Color'/>                          
  </div>
  )
}

export default BotTextBubbleColor