const mongoose = require('mongoose');

// Define Package Schema
const packageSchema = new mongoose.Schema({
  Country: {
    type: String,
    required: true
  },
  Price: {
    type: Number, // Use Number type for price
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
  Duration: {
    type: String,
    required: true
    
  },
  Description: {
    type: String,
    required: true
  },
  ImageUrl: {
    type: String,
    required: true
  }
}, {
  collection: 'TourPackages' // Specify custom collection name
});

// Create Package Model based on Package Schema
const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
