const mongoose = require("mongoose");

// Define the schema for the user collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures email is unique
    },
    age: {
        type: Number,
    },
    about: {
        type: String,
    }
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

// Define the model for the user collection based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;