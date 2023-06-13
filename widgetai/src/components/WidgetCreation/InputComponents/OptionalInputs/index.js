import React, { useEffect, useState } from 'react';
import "./index.css";

const OptionalInputs = () => {
  const [input, setInput] = useState({});
  const [populateArray, setPopulateArray] = useState([0]);
  // const [index, setIndex] = useState([0])
  // useEffect(()=>{
  //   // console.log( populateArray)
  // }, [populateArray])
  const handleInput = (e) => {
    console.log({ ...input, [`${e.target.name}`]: e.target.value });
    setInput({ ...input, [`${e.target.name}`]: e.target.value });
  };

  const handleAdd = (target, index) => {
    setPopulateArray([...populateArray, index + 1]);
  };

  const handleMinus = (e) => {
    e.target.parentElement.parentElement.style.display = "none"
  };
  // console.log(input)
  const populate = populateArray.map((value, index) => {
    let random = Math.ceil(Math.random() * 100000000);
    let name = `OptionalInputs${random}`;
    if(value === 0) setPopulateArray([name])
    return (
      <div className='OptionInputContainer' key={value + index}>
        <div className='OptionInputDivDesign'>
          <div className='PromptContainer'>
            <label htmlFor='OptionalInputs'>
              Entry User Information (Optional)
            </label>
            <input
              name={name}
              type='text'
              placeholder='Ex: Full Name'
              onChange={handleInput}
              value={input[name]}
            />
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
