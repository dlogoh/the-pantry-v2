const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    // Refers to the User model
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  myRecipes: {
    type: [],
  },
  likes: {
    type: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
