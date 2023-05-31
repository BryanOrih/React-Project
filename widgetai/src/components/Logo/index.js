import React, { useContext } from 'react'
import './index.css'
import { MainContext } from '../../context/MainContext'

const Logo = () => {
    const {logo} = useContext(MainContext)
  return (
    <div>logo</div>
  )
}

export default Logo