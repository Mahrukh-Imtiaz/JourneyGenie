const express = require("express");

const {
    createEntry,
    deleteEntry,
    getEntries,
    updateEntry,
    getEntry,
} = require("../controllers/entry");
  
const router = express.Router(); 
  
router.post("/", createEntry); 
router.put("/:id", updateEntry); 
router.delete("/:id", deleteEntry); 
router.get("/author/:userId", getEntries); 
router.get("/:id", getEntry);
  
module.exports = router;