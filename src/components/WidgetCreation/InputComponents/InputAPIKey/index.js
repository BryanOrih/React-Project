import React, { useContext, useState } from 'react'
import { MainContext } from '../../../../context/MainContext'

const InputAPIKey = () => {
  const {setAPIKEY} = useContext(MainContext)

  const [input, setInput] = useState('')
  const handleInput = (e) =>{
    setInput(e.target.value)
    setAPIKEY(e.target.value)
    //FIXME - Make sure to delete empty space
  }
  return (
  <div className='InputAPIKeyContainer'>
    <label htmlFor='InputAPIKey'>
    API KEY
    </label>
    <input name="InputAPIKey" placeholder="xxxxxxxxxxxxxxxxx" type='text' value={input} onChange={handleInput}/>                          
  </div>
  )
}

export default InputAPIKey