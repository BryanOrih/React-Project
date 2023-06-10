import React, { useState } from 'react'
import './index.css'
import { closest } from 'color-diff';
const colorDiff = require('color-diff');

// Rest of your React component code

const HeaderNdSubmitColor = () => {
  console.dir(closest)
  const [color, setColor] = useState("")
  const [input, setInput] = useState("")
  function hexToRgb(hex) {
    // Remove the "#" symbol if present
    hex = hex.replace("#", "");
  
    // Extract the RGB components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    return { r, g, b };
  }
  function wordToRgb(input) {
    let r = 0;
    let g = 0;
    let b = 0;
  
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      r += charCode % 256;
      g += charCode % 256;
      b += charCode % 256;
    }
  
    r %= 256;
    g %= 256;
    b %= 256;
  
    return { r, g, b };
  }

  function rgbToHex(rgb) {
    const { r, g, b } = rgb;
    const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
    return `#${hex}`;
  }

  // const findClosestHex = () =>{
  //   console.log(color, input)
  //   const randomHex = '#FF0000';

  //   const randomColor = hexToRgb(randomHex);
  //   const inputColor = wordToRgb(input);
    
  //   const closestHex = closest(randomColor, [inputColor]);

  //   return rgbToHex(closestHex);  
  // }
  function findClosestHex(input, colors) {
    const inputColor = wordToRgb(input);
    let closestHex = '';
    let minDistance = Infinity;
  
    for (const color of colors) {
      const colorRgb = hexToRgb(color);
      const distance = calculateColorDistance(inputColor, colorRgb);
  
      if (distance < minDistance) {
        minDistance = distance;
        closestHex = color;
      }
    }
  
    return closestHex;
  }

  const handleColor = (e) =>{
    setColor(e.target.value)
  }
  const handleInput = (e) =>{
    setInput(e.target.value)
  }

  const handleSubmit = (e) =>{
    if(e.key == "Enter" || e.key == undefined){
      console.log(findClosestHex(input, color))
    }

  }
  return (
  <div className='TxtNSubmitColorContainer'>
    <label htmlFor='HeaderNdSubmitColor'>
    Select Your User Text Bubble Color
    </label>
    <div name="HeaderNdSubmitColor">
      <input type='color' onChange={handleColor} value={color}/>                          
      <input type='text' value={input} onChange={handleInput} onBlur={handleSubmit} onKeyDown={handleSubmit}/>
    </div>
  </div>
  )
}
export default HeaderNdSubmitColor