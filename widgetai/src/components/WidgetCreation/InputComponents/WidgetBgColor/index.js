import React from 'react'

const WidgetBgColor = () => {
  return (
    <div className='WidgetBgColorContainer'>
        <label htmlFor='WidgetBgColor'>
        Select Your Widget Background Color
        </label>
        <input name="WidgetBgColor" type='Color'/>                          
    </div>
  )
}

export default WidgetBgColor