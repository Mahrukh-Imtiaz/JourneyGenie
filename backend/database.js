const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose.connect(process.env.DB)
        console.log("Connection to Database Successful")
    } catch (error) {
       console.log(error);
       console.log("Couldn't connect to Database");
    }
}