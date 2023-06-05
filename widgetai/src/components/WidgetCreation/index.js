import React, {useEffect, useContext} from 'react'
import axios from 'axios'
import openai, {Configuration, OpenAIApi} from "openai"
import {MainContext} from '../../context/MainContext'
import './index.css'
import ImageInput from './InputComponents/ImageInput'
import HeaderNdSubmitColor from './InputComponents/HeaderSubmitColor'
import InputAPIKey from './InputComponents/InputAPIKey'
import WidgetBgColor from './InputComponents/WidgetBgColor'
import CollapsedWidgetColor from './InputComponents/CollapsedWidgetColor'
import UserTextBubbleColor from './InputComponents/UserTextBubbleColor'
import WidgetBubbleHoverColor from './InputComponents/WidgetBubbleHoverColor'
import EntryText from './InputComponents/WelcomeText'
import BotTextBubbleColor from './InputComponents/BotTextBubbleColor'
import XbuttonColor from './InputComponents/XbuttonColor'
import BotParameters from './InputComponents/BotParameters'
import OptionalInputs from './InputComponents/OptionalInputs'
import WidgetDisplay from '../WidgetDisplay'

const WidgetCreation = () => {
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
        
      //   // Example usage
      //   const prompt = 'What are insects?';
      //   const userParams = 'Only answer business-related questions.';
        
      //   queryChatbot(prompt, userParams)
      //     .then(response => {
      //       console.log(response);
      //     })
      //     .catch(error => {
      //       console.error('Error:', error);
      //     });
      // }, [])

    const {logo} = useContext(MainContext);
  return (
    <>
      <div className='homepageLogo'>
        {logo}
      </div>
      <div id='FormBorder'>
        <div id='FormSpacing'>

        <ImageInput/>
        <HeaderNdSubmitColor/>
        <InputAPIKey/>
        <WidgetBgColor/>
        <CollapsedWidgetColor/>
        <UserTextBubbleColor/>
        <WidgetBubbleHoverColor/>
        <EntryText/>
        <BotTextBubbleColor/>
        <XbuttonColor/> 
        <BotParameters/>
        <OptionalInputs/>
        <WidgetDisplay/>
        </div>
      </div>
      <button>Create</button>
    </>
  )
}

export default WidgetCreation