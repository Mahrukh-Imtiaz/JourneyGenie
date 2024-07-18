require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const connection = require("./database");
const app = express();
const path = require('path');


// Database Connection
connection();

// Middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser()) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet()); 
app.use(morgan("dev"));

// Defining and using existing routes (e.g., auth, booking, chatbot etc.)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/entries', require('./routes/entry')); 
app.use('/api/stats', require('./routes/stats'));
app.use('/api/chatbot', require('./routes/chatbot'));
app.use('/api/booking', require('./routes/Booking'));
app.use('/api/payment', require('./routes/payment'));
app.use('/api/key', require('./routes/pkey'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/UploadPic', require('./routes/uploads'));
app.use('/api', require('./routes/allEntries'));


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
