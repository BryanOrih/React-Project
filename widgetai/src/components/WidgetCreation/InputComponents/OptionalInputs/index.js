import React from 'react'
import "./index.css"
const OptionalInputs = () => {
  return (
  <div className='OptionInputContainer'>
    <div className='OptionInputDivDesign'>
        <div className='PromptContainer'>
          <label htmlFor='OptionalInputs'>
            Entry User Information (Optional)
          </label>
          <input name="OptionalInputs" type='text'/>  
        </div>
        <div className='CatContainer'>
          <label htmlFor='OptionalInputsCat'>
            Category
          </label>
          <select name="OptionalInputsCat" type='text'>  
            <option value="None">Select</option>
            <option value="Country">Country</option>
            <option value="Name">Name</option>
            <option value="Request/Message">Request/Message</option>
            <option value="PhoneNumber">Phone Number</option>
            <option value="Email">Email</option>
          </select>
        </div>
        <i>add button</i>
        <i>minus button</i>
    </div>                        
  </div>
  )
}

export default OptionalInputs