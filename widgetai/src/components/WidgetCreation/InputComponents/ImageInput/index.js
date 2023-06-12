import React, {useContext, useState} from 'react'
import "./index.css"
import { MainContext } from '../../../../context/MainContext';
const ImageInput = () => {
  const {setVAImg} = useContext(MainContext)

  const {selectedImage, setSelectedImage} = useContext(MainContext)

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(file.name);
        // console.dir(reader.result)
        setVAImg(reader.result)
      };
      reader.readAsDataURL(file);
    }
  };
  
  let fileName = `${selectedImage}`.slice(0,15)
  if(fileName.length > 14) fileName = fileName + "..."

  return (
    <div className='ImageInputContainer'>
      <label>VA Profile Image</label>
      <div className="file-input-container">
        <input type="file" id="file-input" onChange={handleImageUpload} className="file-input" accept="image/png, image/jpeg"/>
        <label htmlFor="file-input" className="custom-label">
          <i className="fas fa-cloud-upload-alt"></i> Choose a file
        </label>
        <span id="file-name" className="file-name">{fileName ? `${fileName}` : "No file chosen"}</span>
      </div>
    </div>
  )
}

export default ImageInput