const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Joi = require('joi')
const {User, validate, ValidateLogin} = require('../models/User');
const { v4: uuidv4 } = require('uuid');

// POST /api/auth/Signup
router.post('/Signup', async (req, res) => {
    try {
      const { firstName, lastName, age, gender, country, travelPreferences, email, password } = req.body;
      
      const { error } = validate(req.body);
      if (error)
        return res.status(400).send({ message : error.details[0].message});
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new User({
        firstName,
        lastName,
        age,
        gender,
        country,
        travelPreferences,
        email,
        password: hashedPassword,
        entries: [] 
      });
  
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// POST /api/auth/Login
router.post('/Login', async (req, res) => {
  try {
    
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).send({ message: "Invalid Email or Password"});
    }
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
        return res.status(401).send({ message: "Invalid Email or Password"});
    }

    const sessionId = uuidv4();

    const token = user.generateAuthToken();

    const { password, isAdmin, ...otherDetails } = user._doc;

    res.status(200).send({ details: {...otherDetails}, token , isAdmin, sessionId, message: "Logged In Successfully"});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete User API

router.delete('/DeleteUser', async(req, res) => {
  try { 
    await User.findByIdAndDelete(req.params.id); 
    res.status(200).json("User has been deleted."); 
} catch (err) { 
    next(err); 
} 
});

module.exports = router;
