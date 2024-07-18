import React , { useState, useEffect } from 'react'
import './ChatBot.css'
import axios from 'axios';

const ChatBot = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
  }, []);

  const generateSessionId = () => {
    return Math.random().toString(36).substr(2, 9); 
  };

//   const sessionID = localStorage.getItem('sessionId');

  const sendMessage = async () => {
    try {
        console.log("Message: ", input);
        console.log("ID: ", sessionId);

      const response = await axios.post('http://localhost:8080/api/chatbot/chat', {
        message: input,
        sessionId: sessionId,
      });
  
      const data = response.data;
  
      setMessages([
        ...messages,
        { text: input },
        { text: data.response, sender: 'bot' },
      ]);
  
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='main-chatbot-container'>
    <div className="chat-container">
      <div className="message-container">
        <h1 className='chatbot-heading'>JournieGenie ChatBot</h1>
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'bot' ? 'bot-message' : 'user-message'}>
            {message.sender === 'bot' ? <p>{message.text}</p> : <p>You: {message.text}</p>}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message here..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    </div>
  )
}

export default ChatBot
