import React, { useContext } from 'react'
import './index.css'
import { MainContext } from '../../context/MainContext'
const WidgetCreated = () => {
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
    APIKEY
  } = useContext(MainContext)

  const html = `
  <div id="chat-widget">
    {/*SECTION - Below This is the chat */}
    <div id="widget-open-icon" style={{ display: toggle.ChatWidget }}>
      <div id="chat-header">
        <div className="img-trim">
          {<img id="widget-profile" src={require('${VAimg}')}/>}
        </div>
        <h2>${entryText}</h2>
        {/*NOTE - This is the entry comment */} 
      </div>
      <div id="chat-body">
        <div id="chat-messages" ref={handleScroll}>
          {chatDisplay}
        </div>
        <form id="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            id="user-input"
            value={input}
            onChange={handleInput}
            placeholder="Type your message..."
          />
          <button id="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
    {/*SECTION - Below is the Wiget bubble icons for close and open */}
    <div id="closing-widget-icon-div" style={{ display: toggle.ChatWidget }} onClick={handleToggle}>
      <i className="fa-light fa-x closing-widget-icon widget-Icon"></i>
    </div>
    <div id="neutral-widget-icon-div" style={{ display: toggle.NeutralWidget}} onClick={handleToggle}>
      <i className="far neutral-widget-icon widget-Icon">&#xf086;</i>
    </div>
  </div>
  `

const exception = "`${chatArray[chatArray.length - 1]}`"
const javascript = `
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
      <div className='VA-Text-Bubble-Div' key={index} >
        <p className='VA-Text-Bubble'>{text.response}</p>
      </div>
    )
  }else{
    return (
    <div className="User-Text-Bubble-Div" key={index}>
      <p className="User-Text-Bubble">{text} </p>
    </div>
    )
  }
}
);

//SECTION - ChatGPT API
useEffect(()=>{
  async function queryChatbot(prompt, userParams = '') {
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': '${APIKEY}'
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
  const prompt = ${exception};
  const userParams = 'Only answer business-related questions. If they are not business related, ONLY say "sorry, I can only assist in business related things"';
  
  queryChatbot(prompt, userParams)
    .then(response => {
      setChatArray([...chatArray, {response}]);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, [convoCounter])

`
const css = `
/*SECTION - Widget Icon design and functionality*/
.widget-Icon{
    font-size: 36px;
    border-radius: 50%;
    height: 36px;
    padding: 15px;
    transition: box-shadow .2s ease;
    cursor: pointer;
    /* pointer-events: none; */
    text-align: center;
}
.neutral-widget-icon{
    background-color: ${widgetColor};
    width: 38px;
    padding: 16px 20px 16px 13px;
}
.neutral-widget-icon:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 1); /* Apply the glowing effect on hover */
}
.closing-widget-icon{
    background-color: ${xBtnColor};
    color: white;
    width: 36px;
    line-height: 32px;
}
.closing-widget-icon:hover{
    box-shadow: 0 0 10px rgb(87, 87, 87); /* Apply the glowing effect on hover */
}
#neutral-widget-icon-div::selection{
    transform: rotate(180deg) translateY(11px);
}
#closing-widget-icon-div::selection{
    transform: rotate(-180deg) translateY(-19px);
}
#closing-widget-icon-div, #neutral-widget-icon-div{
    transition: all 0.2s ease-in-out 0s;
    /* cursor: pointer; */
    justify-self: center;
}
#closing-widget-icon-div{
    padding-top: 20px;
}


#widget-open-icon{
    position: relative; /*FIXME - FIX THIS LATER TO MAKE POSITION IN THE RIGHT BOTTOM CORNER */
    width: 320px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
#chat-widget {
    margin-left: auto;
    margin-right: auto;
    grid-column: span 2;
    display: grid;
    grid-template-rows: 6fr 1fr;
    grid-template-columns: 1fr;
    width: 100%;
    height: 95%;
}


/*SECTION - Header elements (img, entry text, and header color)*/
#chat-header {
    padding: 10px;
    background-color: ${headerColor}
    border-bottom: 2px solid #ccc;
    display: flex;
}
.img-trim{
    position: absolute;
    max-height: 50px;
    max-width: 50px;
    overflow: hidden;
    border-radius: 100%;
    bottom: 93%;
    border: 4px solid;
    border-color: ${pfpLineColor};
}
#widget-profile{
    width: 120px;
    height: 60px;
    padding: 0;
    margin-left: -30px;
    /* margin-top: 0px; */
}
#chat-header h2 {
    margin: 0;
    font-size: 16px;
    color: #333;
    margin-left: 80px;
    margin: 8px 8px 8px 65px;
}

/*SECTION - Chat design */
#widget-open-icon{
    border: transparent;
    justify-self: center;
    margin-right: 260px;
    max-height: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 12% 88%;
    grid-template-columns: 1fr;
    padding: 0; 
    transition: all 300ms ease 0s;
}
#chat-body {
    height: 100%;
    display: grid;
    grid-template-rows: 87% 13%;
    overflow-x: hidden;
}

#chat-input {
    padding: 10px;
    background-color: ${footerColor};
    border-top: 1px solid #ccc;
    align-self: end;
    width: 100%;
    display: flex;
    justify-content: center;
}

#chat-input input[type="text"] {
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

#chat-input button {
    padding: 5px 10px;
    margin-left: 10px;
    border: none;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
}

#chat-messages {
    height: 390px;
    width: 100%;
    max-height: 390px;
    overflow-y: scroll;
    ${widgetBgColor}
}

.chat-message {
    margin-bottom: 10px;
}

.user-message {
    background-color: #e2f3f5;
    padding: 5px 10px;
    border-radius: 3px;
}

.assistant-message {
    background-color: #d3d3d3;
    padding: 5px 10px;
    border-radius: 3px;
}

/*SECTION - Chat Design  */
.User-Text-Bubble{
    margin-right: 10px;
}
.User-Text-Bubble-Div{
    margin: 10px;
    width: fit-content;
    margin-left: auto;
    padding-left: 10px;
    position: relative;
    display: flex;
    justify-content: end;
    ${userTxTBubble}
    border-radius: 10px 10px 0px 10px;
}
.VA-Text-Bubble{
    margin-left: 10px;
}
.VA-Text-Bubble-Div{
    margin: 10px;
    width: fit-content;
    position: relative;
    display: flex;
    margin-right: 20%;
    justify-content: start;
    ${AiTxtBubble}
    border-radius: 10px 10px 10px 0px;
}

#chat-input > *{
    height: 40px;
}
#send-button{
  background-color: ${submitBtn}
}
`

  return (
    <div id='FormBorder'>
      <div id='Output-Border'>
        <div id='html'></div>
          <h1>HTML</h1>
          <pre>
            {html}
          </pre>
        <div id='javascript'>
          <h1>Javascript</h1>
          <pre>
            {javascript}
          </pre>
        </div>
        <div id='css'>
          <h1>CSS</h1>
          <pre>
            {css}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default WidgetCreated