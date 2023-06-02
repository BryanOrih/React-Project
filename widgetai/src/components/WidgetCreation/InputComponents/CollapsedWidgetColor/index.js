import React from 'react'

const CollapsedWidgetColor = () => {
  return (
    <div className='BubbleColorContainer'>
      <label htmlFor='CollapsedWidgetColor'>
      Select Your Bubble Widget Color
      </label>
      <input name="CollapsedWidgetColor" type='Color'/>                          
    </div>
  )
}

export default CollapsedWidgetColor