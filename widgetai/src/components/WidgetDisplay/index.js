import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./index.css"

const WidgetDisplay = () => {
  console.log(process.env.REACT_APP_API_KEY)
  const [toggle, setToggle] = useState(
    {
      NeutralWidget: "",
      ChatWidget: "none"
    }
  )
  const handleToggle = (e) =>{
    if(e.target.className.includes("neutral-widget-icon")){
      setToggle({
        NeutralWidget: "none",
        ChatWidget: ""
      })
    }else{
      setToggle({
        NeutralWidget: "",
        ChatWidget: "none"
      })
    }
  }
  const sendMessage = async (message) => {
    const userMessage = { role: 'user', content: message };
    setChatMessages(prevMessages => [...prevMessages, userMessage]);

    const chatResult = await queryChatbot(message);
    const systemMessage = { role: 'system', content: chatResult };
    setChatMessages(prevMessages => [...prevMessages, systemMessage]);
  };
  useEffect(() => {
    async function queryChatbot(prompt, userParams = '') {
      const url = 'https://api.openai.com/v1/chat/completions';
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      };

      const systemMessage = { role: 'system', content: 'You are a helpful assistant.' };
      const userMessage = { role: 'user', content: prompt };
      const messages = [systemMessage, userMessage];

      if (userParams) {
        const paramMessage = { role: 'user', content: userParams };
        messages.push(paramMessage);
      }

      const data = {
        model: 'gpt-3.5-turbo',
        messages
      };

      try {
        const response = await axios.post(url, data, { headers });
        const chatResult = response.data.choices[0].message.content;
        return chatResult;
      } catch (error) {
        console.error('Error:', error.response.data);
        return null;
      }
    }

    // Example initial system message
    const systemMessage = { role: 'system', content: 'Welcome to the chat!' };
    setChatMessages([systemMessage]);
  }, []);


  return (
    <div id="chat-widget">
      {/*SECTION - Below This is the chat */}
      <div id="widget-open-icon" style={{ display: toggle.ChatWidget }}>
        <div id="chat-header">
          <div className="img-trim">
            <img id="widget-profile" src={require('./photo.jpg')} alt="Profile" />
          </div>
          <h2>Entry Comment</h2> {/*NOTE - This is the entry comment */}
        </div>
        <div id="chat-body">
          <div id="chat-messages">
            {chatMessages.map((message, index) => (
              <div key={index} className={`message message-${message.role}`}>
                {message.content}
              </div>
            ))}
          </div>
          <div id="chat-input">
            <input
              type="text"
              id="user-input"
              placeholder="Type your message..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendMessage(e.target.value);
                  e.target.value = '';
                }
              }}
            />
            <button id="send-button" onClick={() => {
              const userInput = document.getElementById('user-input');
              sendMessage(userInput.value);
              userInput.value = '';
            }}>
              Send
            </button>
          </div>
        </div>
      </div>
      {/*SECTION - Below is the Wiget bubble icons for close and open */}
        <div id='closing-widget-icon-div' style={{display: toggle.ChatWidget /*, transform:animation.ChatWidget */}} onClick={handleToggle}>
          <i className="fa-light fa-x closing-widget-icon widget-Icon"></i>
        </div>
        <div id='neutral-widget-icon-div' style={{display: toggle.NeutralWidget /*,transform:animation.NeutralWidget*/}} onClick={handleToggle}>
          <i className='far neutral-widget-icon widget-Icon'>&#xf086;</i>
        </div>
      </div>
  )
}

export default WidgetDisplay