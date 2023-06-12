import React, { useContext, useState } from 'react'
import { MainContext } from '../../../../context/MainContext'

const EntryText = () => {
  const [input, setInput] = useState("")
  const {entryText, setEntryText} = useContext(MainContext)

  const handleInput = (e) =>{
    setInput(e.target.value)
    setEntryText(e.target.value)
  }

  return (
  <div className='EntryTextContainer'>
    <label htmlFor='EntryText'>
    VA Welcome Text
    </label>
    <input name="EntryText" placeholder='Ex: Greetings!' type='text' value={input} onChange={handleInput}/>                          
  </div>
  )
}

export default EntryText