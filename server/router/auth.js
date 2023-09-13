const express = require("express");
const router = express.Router();
const User = require("../model/userSchema.js"); // Import the Mongoose User model

router.post("/register", async (req, res) => {
  console.log(req, "req.body");

  try {
    console.log(req.body, "req.body");
    // Create a new user based on the request data
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      cpassword: req.body.cpassword,
      // Set other fields here
    });

    console.log(newUser, "newUser");
    // Save the user to the database
    const savedUser = await newUser.save();
    console.log(savedUser, "savedUser");

    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Unable to save user data" });
  }
});

module.exports = router;
