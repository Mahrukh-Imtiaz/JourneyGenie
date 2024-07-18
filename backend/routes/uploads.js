const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/';
    // Ensure the directory exists
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Upload route
router.post('/upload', upload.array('photos', 3), (req, res) => {
  const fileNames = req.files.map(file => file.filename);
  res.json({ filenames: fileNames });
});

module.exports = router;
