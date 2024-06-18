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
        const { firstName, lastName, gender, email, phone, address } = req.body;
        if (!firstName || !lastName || !gender || !email || !phone || !address) {
            return res.status(400).send({ message: 'Missing required fields' });
        }
        const newUser = await userModel.create({ firstName, lastName, gender, email, phone, address });
        res.send({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});


router.post("/api/v1/users/delete", async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).send({ message: 'User ID is required' });
        }
        const deletedUser = await userModel.findByIdAndDelete(id); // Find and delete user by ID
        if (!deletedUser) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

module.exports = router;