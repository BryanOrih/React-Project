import React, {useEffect, useContext, useState, useRef} from 'react'
import './index.css'

const Canvas = () => {
  const canvas = React.useRef()
  return (
    <canvas id='ImgCanvas' ref={canvas}></canvas>
  )
}

export default Canvas