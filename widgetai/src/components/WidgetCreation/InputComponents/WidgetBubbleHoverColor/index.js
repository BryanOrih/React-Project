import React from 'react'

const WidgetBubbleHoverColor = () => {
  return (
  <div className='bubbleHoverContainer'>
    <label htmlFor='WidgetBubbleHoverColor'>
    Select the hover color of your Widget
    </label>
    <input name="WidgetBubbleHoverColor" type='Color'/>                          
  </div>
  )
}

export default WidgetBubbleHoverColor