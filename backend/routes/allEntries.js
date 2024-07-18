const express = require("express");
const Entry = require("../models/Entry");
const router = express.Router(); 

router.get('/allEnrties', async (req, res) => {
    try {
            const allEntries = await Entry.find();
            res.status(200).json(allEntries);
          } catch(err) {
            next(err);
          }
} )

module.exports = router;