import React from 'react'

const UserTextBubbleColor = () => {
  return (
  <div className='UserTxtBubbleColorContainer'>
    <label htmlFor='UserTextBubbleColor'>
    Select Your User Text Bubble Color
    </label>
    <input name="UserTextBubbleColor" type='Color'/>                          
  </div>
  )
}

export default UserTextBubbleColor