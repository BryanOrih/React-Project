import React, {useContext, useEffect, useState} from 'react'
import "./index.css"
import { MainContext } from '../../../../context/MainContext';

const loadImage = (setImageDimensions, imageUrl, imageDimensions) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    if(img.width > img.height){
      setImageDimensions({
        ...imageDimensions,
        height: "100%",
        width: "fit-content"
      });
    }else{
      setImageDimensions({
        height: "fit-content",
        width: "100%"
      });
    }
  };
  img.onerror = (err) => {
    console.log("img error");
    console.error(err);
  };
};

const ImageInput = () => {
  const {
    setVAImg, 
    VAimg,
    selectedImage,
    setSelectedImage,
    imageDimensions,
    setImageDimensions,
  } = useContext(MainContext)

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(file.name);
        setVAImg(reader.result)
        loadImage(setImageDimensions, reader.result, imageDimensions)
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
          <i className="fas fa-cloud-upload-alt"></i> Upload file
        </label>
        <span id="file-name" className="file-name">{fileName ? `${fileName}` : "No file chosen"}</span>
      </div>
    </div>
  )
}

export default ImageInput