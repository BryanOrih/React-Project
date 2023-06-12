import React, {createContext, useContext, useState} from 'react'
import "./MainContext.css"
export let MainContext = createContext()

const MainContextProvider = (props) => {

    const [logo, setLogo] = useState(
        <img src={require("../images/logo.png")} className='logo'/>
        )
    const [selectedImage, setSelectedImage] = useState("");
    
    // SECTION - Important Info for VA
    const [entryText, setEntryText] = useState('')
    const [userTxTBubble, setUserTxtBubble] = useState('')
    const [AiTxtBubble, setAiTxtBubble] = useState('')
    const [widgetBgColor, setWidgetBgColor] = useState('')
    const [widgetColor, setWidgetColor] = useState('')
    const [xBtnColor, setXBtnColor] = useState('')
    const [submitBtn, setSubmitBtn] = useState('')
    const [headerColor, setHeaderColor] = useState('')
    const [pfpLineColor, setPfpLineColor] = useState('')
    const [footerColor, setFooterColor] = useState('')
    const [VAimg, setVAImg] = useState('')

    const object = {
      logo,
      setLogo,
      selectedImage, 
      setSelectedImage,
      entryText,
      setEntryText,
      userTxTBubble,
      setUserTxtBubble,
      AiTxtBubble,
      setAiTxtBubble,
      widgetBgColor,
      setWidgetBgColor,
      widgetColor,
      setWidgetColor,
      xBtnColor,
      setXBtnColor,
      submitBtn,
      setSubmitBtn,
      headerColor,
      setHeaderColor,
      pfpLineColor,
      setPfpLineColor,
      footerColor,
      setFooterColor,
      VAimg,
      setVAImg
    }
  return (
    <MainContext.Provider value={object}>
        {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider