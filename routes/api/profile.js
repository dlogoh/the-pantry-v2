const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route     GET api/profile/me
// @desc      Get current users profile
// @access    Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.find({ user: req.user.id }).populate("user", [
      "name",
      "avatar",
    ]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/profile/
// @desc      Create or update user profile
// @access    Private
router.post("/", auth, async (req, res) => {
  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }

    // Create
    profile = new Profile(profileFields);

    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route     GET api/profile
// @desc      Get users recipes
// @access    Private
router.get("/myRecipes", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).select(
      "myRecipes"
    );

    res.json(profile.myRecipes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/profile
// @desc      Add a recipe
// @access    Private
router.post(
  "/myRecipes",
  [auth, check("recipe", "Recipe is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { recipe } = req.body;
      const profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $push: { myRecipes: recipe } },
        { new: true, upsert: true }
      );

      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route     GET api/profile
// @desc      Get all profiles
// @access    Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);

    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route     GET api/profile/user/:user_id
// @desc      Get profile by user ID
// @access    Public

router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) return res.status(400).json({ msg: "Profile not found" });

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route     DELETE api/profile
// @desc      Delete profile, user & posts
// @access    Private

router.delete("/", auth, async (req, res) => {
  try {
    // @todo - remove users posts
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route     DELETE api/profile/myRecipes/:recipe_id
// @desc      Delete users recipe
// @access    Private
router.delete("/myRecipes/:recipe_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    const removeIndex = profile.myRecipes
      .map((item) => item.id)
      .indexOf(req.params.recipe_id);

    profile.myRecipes.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
