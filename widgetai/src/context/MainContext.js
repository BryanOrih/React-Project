import React, {createContext, useContext, useState} from 'react'
import "./MainContext.css"
export let MainContext = createContext()

const MainContextProvider = (props) => {

    const [logo, setLogo] = useState(
        <img src={require("../images/logo.png")} className='logo'/>
        )
    const [selectedImage, setSelectedImage] = useState("");
    const [widgetColor, setWidgetColor] = useState("")

    const object = {
      logo,
      setLogo,
      selectedImage, 
      setSelectedImage
    }
  return (
    <MainContext.Provider value={object}>
        {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider