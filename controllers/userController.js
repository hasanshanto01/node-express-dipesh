const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/v1/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Successfully registered" });
});

//@desc Login a user
//@route POST /api/v1/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Successfully logged in" });
});

//@desc Current user info
//@route POST /api/v1/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
