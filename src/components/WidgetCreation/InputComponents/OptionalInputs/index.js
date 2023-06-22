import React, { useEffect, useState } from 'react';
import "./index.css";

const OptionalInputs = () => {
  const [input, setInput] = useState({
    OptionalInputs0: '',
  });
  const [selectedValue, setSelectedValue] = useState({
    OptionalInputs0: '',
  });
  const [populateArray, setPopulateArray] = useState([0]);

  const handleInput = (e,name) => {
    setInput({ ...input, [name]: e.target.value });
  };
  const handleSelectChange = (e, name) =>{
    setSelectedValue({ ...selectedValue, [name]: e.target.value });
  } 
  const handleAdd = (name, index) => {
    setPopulateArray([...populateArray, index + 1]);
    setInput({...input, [name.slice(0,14)+`${index+1}`]: ""})
    setSelectedValue({...selectedValue, [name.slice(0,14)+`${index+1}`]: ""})
  };
  const handleMinus = (e) => {
    e.target.parentElement.parentElement.style.display = "none"
  };

  const populate = populateArray.map((value, index) => {
    let name = `OptionalInputs${index}`;
    return (
      <div className='OptionInputContainer' key={index}>
        <div className='OptionInputDivDesign'>
          <div className='PromptContainer'>
            <label htmlFor='OptionalInputs'>
              Entry User Information (Optional)
            </label>
            <input
              name={name}
              type='text'
              placeholder='Ex: Full Name'
              onChange={(e)=>{handleInput(e,name)}}
              value={input[name]}
            />
          </div>
          <div className='CatContainer'>
            <label htmlFor='OptionalInputsCat'>
              Category
            </label>
            <select name="OptionalInputsCat" type='text' value={selectedValue[name]} onChange={(e) =>{handleSelectChange(e,name)}}>
              <option value="None">Select</option>
              <option value="Country">Country</option>
              <option value="Name">Name</option>
              <option value="Request/Message">Request/Message</option>
              <option value="PhoneNumber">Phone Number</option>
              <option value="Email">Email</option>
            </select>
          </div>
          <i className="fa-solid fa-square-plus addBtn" onClick={() => { handleAdd(name, index)}}></i>
          <i className="fa-solid fa-square-minus minusBtn" onClick={handleMinus}></i>
        </div>
      </div>
    );
  });

  return (
    <>
      {populate}
    </>
  );
}

export default OptionalInputs;
