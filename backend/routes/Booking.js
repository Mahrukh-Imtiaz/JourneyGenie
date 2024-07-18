// Booking.js - Express Router
const express = require('express');
const router = express.Router();
const Package = require('../models/Package');

// Route to retrieve tour packages
router.get('/tour-packages', async (req, res) => {
  try {
    const tourPackages = await Package.find();
    res.status(200).json({ tourPackages });
  } catch (error) {
    console.error('Error retrieving tour packages:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
