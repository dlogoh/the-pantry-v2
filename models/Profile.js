const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    // Refers to the User model
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  myRecipes: [
    {
      title: {
        type: String,
      },
      category: {
        type: String,
      },
      isPublic: {
        type: String,
      },
      ingredients: {
        type: String,
      },
      instructions: {
        type: String,
      },
      likes: {
        type: [],
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  likes: {
    type: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
