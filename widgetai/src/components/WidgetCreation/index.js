import React, {useEffect, useContext, useState} from 'react'
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

const WidgetCreation = () => {
  const {logo, VAImg} = useContext(MainContext);
  const [display, setDisplay] = useState("block")
  useEffect(()=>{

  }, [VAImg])
  
  const handleClose = () =>{
    setDisplay('none')
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
      <div id='ConfirmImgContainerBg' style={{display: display}}>
        <div id='ConfirmImgContainer'>
            <div id='ImgHeaderContainer'>
              <p>Edit Photo</p>  
              <i className="fa-light fa-x" id='close-img-edit-btn' onClick={handleClose}></i>
            </div> 
            <canvas id='ImgCanvas'></canvas>
            <div>
              <button>Crops</button>
            </div>
            <div id='ImgRotationBtn'>
              <i>Twist right</i>
              <i>Twist left</i>
            </div>
            <div id='AdjustImgCtrl'>
              <div>Zoom</div>
              <div>Straighten</div>
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