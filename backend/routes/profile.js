const express = require('express');
const router = express.Router();
const Entry = require("../models/Entry");
const {User, validate, ValidateLogin} = require('../models/User');

router.get('/userData', async (req, res) => {
    try {
        // Extract the user ID from the request headers
        const userId = req.headers['authorization'].split(' ')[1];
       
        // Find the user by ID
        const user = await User.findById(userId);
        if (user) {
           
          // Find entries authored by the user
          const entries = await Entry.find({ author: user._id });

          
          // Prepare the profile data
          const profileData = {
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            gender: user.gender,
            country: user.country,
            travelPreferences: user.travelPreferences,
            email: user.email,
            password: user.password,
            entries: entries.map(entry => ({
              location: entry.location,
              date: entry.date,
              photo: entry.photos.length > 0 ? entry.photos[0] : null,
            })),
          };
          
          // Send the profile data as JSON
          res.json(profileData);
        } else {
          res.status(404).send('User not found');
        }
      } catch (err) {
        res.status(500).send(err.message);
      }
  });

  module.exports = router;