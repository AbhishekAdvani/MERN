const mongoose = require("mongoose");

// Create schema for model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
});

// in user key created in database save userSchema Data
const User = mongoose.Model("USER", userSchema);

// Exporting it for new data
module.exports = User;
