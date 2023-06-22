import React, { useState, useEffect, useRef, useContext } from 'react'
import axios from 'axios';
import "./index.css"
import openai, {Configuration, OpenAIApi} from "openai"
import { MainContext } from '../../context/MainContext';

const WidgetDisplay = () => {
  //SECTION - useContext
  const {
    entryText,
    userTxTBubble,
    AiTxtBubble,
    widgetBgColor,
    widgetColor,
    xBtnColor,
    submitBtn,
    headerColor,
    pfpLineColor,
    footerColor,
    VAimg,
    imageDimensions
  } = useContext(MainContext)

  // SECTION - Set up states
  const [toggle, setToggle] = useState({
    NeutralWidget: '',
    ChatWidget: 'none',
  });
  const [input, setInput] = useState('');
  const [chatArray, setChatArray] = useState([]);
  const [convoCounter, SetConvoCounter] = useState(1)

  const handleToggle = (e) => {
    if (e.target.className.includes('neutral-widget-icon')) {
      setToggle({
        NeutralWidget: 'none',
        ChatWidget: '',
      });
    } else {
      setToggle({
        NeutralWidget: '',
        ChatWidget: 'none',
      });
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input == "") return
    setChatArray([...chatArray, input]);
    setInput('');
    SetConvoCounter(convoCounter + 1)
  };
  const handleScroll = (e) =>{
    if(e === null) return
    e.scrollTop = e.scrollHeight
  }
  // SECTION - Populates the chat 
  const chatDisplay = chatArray.map((text, index) =>{
    if(typeof text != "string"){
      console.log(text.response)
      return(
        <div className='VA-Text-Bubble-Div' key={index} style={{backgroundColor:AiTxtBubble || "lightblue"}}>
          <p className='VA-Text-Bubble'>{text.response}</p>
        </div>
      )
    }else{
      return (
      <div className="User-Text-Bubble-Div" key={index} style={{backgroundColor:userTxTBubble || "lightblue"}}>
        <p className="User-Text-Bubble">{text} </p>
      </div>
      )
    }
  }
  );

  //SECTION - ChatGPT API
  // useEffect(()=>{
  //   async function queryChatbot(prompt, userParams = '') {
  //     const url = 'https://api.openai.com/v1/chat/completions';
  //     const headers = {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
  //     };
    
  //     const systemMessage = { role: 'system', content: 'You are a helpful assistant.' };
  //     const userMessage = { role: 'user', content: prompt };
  //     const messages = [systemMessage, userMessage];
    
  //     if (userParams) {
  //       const paramMessage = { role: 'user', content: userParams };
  //       messages.push(paramMessage);
  //     }
    
  //     const data = {
  //       model: 'gpt-3.5-turbo',
  //       messages
  //     };
    
  //     try {
  //       const response = await axios.post(url, data, { headers });
  //       const chatResult = response.data.choices[0].message.content;
  //       return chatResult;
  //     } catch (error) {
  //       console.error('Error:', error.response.data);
  //       return null;
  //     }
  //   }
    
  //   // Example usage ${input}
  //   const prompt = `${chatArray[chatArray.length - 1]}`;
  //   const userParams = 'Only answer business-related questions. If they are not business related, ONLY say "sorry, I can only assist in business related things"';
    
  //   queryChatbot(prompt, userParams)
  //     .then(response => {
  //       setChatArray([...chatArray, {response}]);
  //       // console.log(response)
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }, [convoCounter])

  return (
    <div id="chat-widget">
      {/*SECTION - Below This is the chat */}
      <div id="widget-open-icon" style={{ display: toggle.ChatWidget }}>
        <div id="chat-header" style={{backgroundColor: headerColor || "#f2f2f2"}}>
          <div className="img-trim" style={{borderColor:pfpLineColor|| "rgb(201, 197, 197)"}}>
            {<img id="widget-profile" src={VAimg || require('./photo.jpg')} style={{height: imageDimensions.height, width: imageDimensions.width}}/>}
          </div>
          <h2>{entryText || "Greetings!"}</h2>
          {/*NOTE - This is the entry comment */} 
        </div>
        <div id="chat-body">
          <div id="chat-messages" ref={handleScroll} style={{backgroundColor:widgetBgColor || "white"}}>
            {chatDisplay}
          </div>
          <form id="chat-input" onSubmit={handleSubmit} style={{backgroundColor: footerColor||"#f2f2f2"}}>
            <input
              type="text"
              id="user-input"
              value={input}
              onChange={handleInput}
              placeholder="Type your message..."
            />
            <button id="send-button" style={{backgroundColor:submitBtn || "#4CAF50"}}>
              Send
            </button>
          </form>
        </div>
      </div>
      {/*SECTION - Below is the Wiget bubble icons for close and open */}
      <div id="closing-widget-icon-div" style={{ display: toggle.ChatWidget }} onClick={handleToggle}>
        <i className="fa-light fa-x closing-widget-icon widget-Icon" style={{backgroundColor:xBtnColor || "#e93d3d"}}></i>
      </div>
      <div id="neutral-widget-icon-div" style={{ display: toggle.NeutralWidget}} onClick={handleToggle}>
        <i className="far neutral-widget-icon widget-Icon" style={{backgroundColor:widgetColor || "white"}}>&#xf086;</i>
      </div>
    </div>
  );
};
export default WidgetDisplay