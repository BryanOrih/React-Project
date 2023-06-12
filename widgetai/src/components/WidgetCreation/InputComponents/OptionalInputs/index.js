import React, { useState } from 'react'
import "./index.css"
const OptionalInputs = () => {
  const [input, setInput] = useState({})
  const [populateArray, setPopulateArray] = useState([1])
  const handleInput = (e) =>{
    let name = e.target.name
    setInput({...input, [`${name}`]:e.target.value})
  }
  const handleAdd = (target) =>{
    setPopulateArray([...populateArray, target])
  }
  const handleMinus = (target) =>{
    let subArray = [...populateArray]
    // let num = target
    let index = subArray.indexOf(target)
    subArray.splice(index,1)
    setPopulateArray([...subArray])
  }
  const populate = populateArray.map((value, index)=>{
    let random = Math.random()
    let name = `OptionalInputs${random}`
    return(
      <div className='OptionInputContainer' key={value + index}>
        <div className='OptionInputDivDesign'>
            <div className='PromptContainer'>
              <label htmlFor='OptionalInputs'>
                Entry User Information (Optional)
              </label>
              <input name={`${name}`} type='text' placeholder='Ex: Full Name' onChange={handleInput} value={input[name]}/>  
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
            <i className="fa-solid fa-square-plus addBtn" onClick={(name)=>{handleAdd(name)}}></i>
            <i className="fa-solid fa-square-minus minusBtn" onClick={(name)=>{handleMinus(name)}}></i>
        </div>                                         
      </div>
    )
  })
  return (
    <>
      {populate}
    </>
  )
}

export default OptionalInputs