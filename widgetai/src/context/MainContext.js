import React, {createContext, useContext, useState} from 'react'
import "./MainContext.css"
export let MainContext = createContext()

const MainContextProvider = (props) => {

    const [logo, setLogo] = useState(
        <img src={require("../images/logo.png")} className='logo'/>
        )

  return (
    <MainContext.Provider value={{logo}}>
        {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider