const asyncHandler = require("express-async-handler"); // middleware for handling error in async function

//@desc Get all contacts
//@route GET /api/v1/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Create a contact
//@route POST /api/v1/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("contact body:", req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  res.status(201).json({ message: "Create a contact" });
});

// ***** try-catch to catch error in async function *****
// const createContact = async (req, res, next) => {
//   console.log("contact body:", req.body);
//   const { name, email, phone } = req.body;

//   try {
//     if (!name || !email || !phone) {
//       res.status(400);
//       throw new Error("All fields are mandatory");
//     }

//     res.status(201).json({ message: "Create a contact" });
//   } catch (error) {
//     // Pass the error to the Express error handling middleware
//     next(error);
//   }
// };
// ***** try-catch to catch error in async function *****

//@desc Get a contact
//@route GET /api/v1/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get a contact" });
});

//@desc Update a contact
//@route PUT /api/v1/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update a contact" });
});

//@desc Delete a contact
//@route DELETE /api/v1/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete a contact" });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
