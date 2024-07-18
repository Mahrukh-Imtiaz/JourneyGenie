// routes/chatbot.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/chat', async (req, res) => {
    const { message, sessionId } = req.body;

  // Send message to BrainShop API
  try {
    const response = await axios.get(process.env.API_URL, {
      params: {
        uid: sessionId, 
        msg: message,
      },
      
    });
    if (response.data && response.data.cnt) {
    console.log(response);
    res.json({ response: response.data.cnt });
    }
    else {
      res.json({ response: "Hi! I am here to assist you with your travel queries" });
    }
  } catch (error) {
    console.error('Error sending message to BrainShop API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
