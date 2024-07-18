const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  travelPreferences: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  entries: [ 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Entry'
    } 
], 
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: "7d"});
    return token
};

const User = mongoose.model("user", userSchema)

const validate = (data) => {
    const schema = Joi.object({
        firstName : Joi.string().required().label("First Name"),
        lastName : Joi.string().required().label("Last Name"),
        age: Joi.number().integer().min(18).required().label("Age"),
        gender: Joi.string().valid('male', 'female', 'other', 'Male', 'Female').required().label("Gender"),
        country: Joi.string().required().label("Country"),
        travelPreferences: Joi.string().required().label("Travel Preferences"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
}

const ValidateLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    });

    return schema.ValidateLogin(data);
}

module.exports = {User, validate, ValidateLogin};