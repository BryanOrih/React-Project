import React, {useEffect, useContext, useState, useRef} from 'react'
import axios from 'axios'
import openai, {Configuration, OpenAIApi} from "openai"
import {MainContext} from '../../context/MainContext'
import './index.css'
import {Link} from 'react-router-dom'
import ImageInput from './InputComponents/ImageInput'
import InputAPIKey from './InputComponents/InputAPIKey'
import WidgetBgColor from './InputComponents/WidgetBgColor'
import CollapsedWidgetColor from './InputComponents/CollapsedWidgetColor'
import UserTextBubbleColor from './InputComponents/UserTextBubbleColor'
import EntryText from './InputComponents/WelcomeText'
import BotTextBubbleColor from './InputComponents/BotTextBubbleColor'
import XbuttonColor from './InputComponents/XbuttonColor'
import BotParameters from './InputComponents/BotParameters'
import OptionalInputs from './InputComponents/OptionalInputs'
import WidgetDisplay from '../WidgetDisplay'
import SubmitBtnColor from './InputComponents/SubmitBtnColor'
import HeaderColor from './InputComponents/HeaderColor'
import PfpOutlineColor from './InputComponents/PfpLineColor'
import FooterColor from './InputComponents/FooterColor'
import Canvas from './ComponentFunctionality/Canvas'


const WidgetCreation = () => {
  const {
    logo,
    VAImg,
    imgEditDiv,
    setImgEditDiv
  } = useContext(MainContext);
  // useEffect(()=>{

  // }, [VAImg])
  
  const handleClose = () =>{
    setImgEditDiv('none')
  }
  return (
    <>
      <div className='homepageLogo'>
        {logo}
      </div>
      <div id='FormBorder'>
        <div id='FormSpacing'>
        <ImageInput/>
        <EntryText/>
        <InputAPIKey/>
        <HeaderColor/>
        <WidgetBgColor/>
        <CollapsedWidgetColor/>
        <UserTextBubbleColor/>
        <SubmitBtnColor/>
        <BotTextBubbleColor/>
        <XbuttonColor/> 
        <PfpOutlineColor/>
        <FooterColor/>
        <BotParameters/>
        <OptionalInputs/>
        <WidgetDisplay/>
        </div>
      </div>
      <div id='ConfirmImgContainerBg' style={{display: imgEditDiv}}>
        <div id='ConfirmImgContainer'>
            <div id='ImgHeaderContainer'>
              <p>Edit Photo</p>  
              <i className="fa-regular fa-x" id='close-img-edit-btn' onClick={handleClose}></i>
            </div> 
            <Canvas/>
            <div id='ImageEditOptions'>
              <button className='active'><i className="fa-solid fa-crop-simple"></i>Crop</button>
            </div>
            <div id='ImgRotationBtn'>
              <button><i className="fa-solid fa-arrow-rotate-right"></i></button>
              <button><i className="fa-solid fa-arrow-rotate-left"></i></button>
            </div>
            <div id='AdjustImgCtrl'>
              <div>
                <p>Zoom</p>
                <span><i className="fa-solid fa-minus"></i><input type='range'/><i className="fa-solid fa-plus"></i></span>
              </div>
              <div>
                <p>Straighten</p>
                <span><i className="fa-solid fa-minus"></i><input type='range'/><i className="fa-solid fa-plus"></i></span>
              </div>
            </div>
            <div id='ImgFooterContainer'>
              <button>Save Photo</button>
            </div>
        </div>
      </div>
      <Link to="/CreateWidget/WidgetCreated"><button id='Create-Button'>Create</button></Link>
    </>
  )
}

export default WidgetCreation