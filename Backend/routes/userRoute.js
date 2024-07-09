const express = require("express");
const router = express.Router();
const user = require("../models/userModels");

// Create 
router.post('/', async(req, res) => {
    const { name, email, age, about } = req.body;

    try {
        const userAdded = await user.create({
            name: name,
            email: email,
            age: age,
            about: about
        });
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: error.message
        });
    }
});

// Get all users
router.get("/", async(req, res) => {
    try {
        const showData = await user.find();
        res.status(200).json(showData);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
});

// Get single User
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await user.findById(id);
        if (!singleUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
});

// delete 
router.delete("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await user.findByIdAndDelete(id);
        if (!singleUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
});

// PUT or Update
router.patch("/:id", async(req, res) => {
    const { id } = req.params;
    const { name, email, age, about } = req.body;
    try {
        const updateUser = await user.findByIdAndUpdate(id, req.body, {
            new: true
        });
        if (!updateUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;