import React, { useState } from 'react';
import "./index.css";

const OptionalInputs = () => {
  const [input, setInput] = useState({});
  const [populateArray, setPopulateArray] = useState([0]);

  const handleInput = (e) => {
    setInput({ ...input, [`${e.target.name}`]: e.target.value });
  };

  const handleAdd = (target) => {
    setPopulateArray([...populateArray, target]);
  };

  const handleMinus = (index) => {
    let subArray = [...populateArray];
    subArray.splice(index, 1);
    setPopulateArray([...subArray]);
  };

  const populate = populateArray.map((value, index) => {
    let random = Math.ceil(Math.random() * 100000000);
    let name = `OptionalInputs${random}`;
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
          <i className="fa-solid fa-square-plus addBtn" onClick={() => { setPopulateArray([...populateArray, name]) }}></i>
          <i className="fa-solid fa-square-minus minusBtn" onClick={() => { handleMinus(index) }}></i>
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
