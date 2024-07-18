const express = require('express');
const router = express.Router();

// Your Stripe publishable key (ideally loaded from environment variables)
const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;

// Route to fetch the Stripe publishable key
router.get('/stripe-key', (req, res) => {
  res.json({ publishableKey });
});

module.exports = router;
