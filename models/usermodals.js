const mongoose = require("mongoose");

const userShema = mongoose.Schema({
    firstname: String,
    lastname: String,
    gender: String,
    email: String,
    phone: Number,
    address: String,
});

const userModel = new mongoose.model('user', userShema);

module.exports = userModel;