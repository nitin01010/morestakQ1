const express = require("express");
const userModel = require("../models/usermodals");
const router = express.Router();

router.get("/api/v1/users", async (req, res) => {
    try {
        const users = await userModel.find({});
        res.send({ users });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

router.post("/api/v1/users", async (req, res) => {
    try {
        const { firstname, lastname, gender, email, phone, address } = req.body;
        if (!firstname || !lastname || !gender || !email || !phone || !address) {
            return res.status(400).send({ message: 'Missing required fields' });
        }
        const newUser = await userModel.create({ firstname, lastname, gender, email, phone, address });
        res.send({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});


module.exports = router;