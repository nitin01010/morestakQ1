const mongoose = require("mongoose");

const userShema = mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    phone: Number,
    address: String
});

const userModel = new mongoose.model('user', userShema);

module.exports = userModel;