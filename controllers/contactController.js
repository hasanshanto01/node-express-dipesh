const asyncHandler = require("express-async-handler"); // middleware for handling error in async function
const contactModel = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/v1/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await contactModel.find();
  res.status(200).json({ contacts, message: "Retrive contacts successfully" });
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

  const contact = await contactModel.create({
    name,
    email,
    phone,
  });

  res
    .status(201)
    .json({ contact: contact, message: "Contact created successfully" });
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
  const contactId = req.params.id;

  const contact = await contactModel.findById(contactId);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json({ contact, message: "Retrive contact successfully" });
});

//@desc Update a contact
//@route PUT /api/v1/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contactId = req.params.id;

  const contact = await contactModel.findById(contactId);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const ContactBody = req.body;
  // console.log("ContactBody", ContactBody);

  const updatedContact = await contactModel.findByIdAndUpdate(
    contactId,
    ContactBody,
    { new: true } //ensures that the method returns the updated contact document rather than the original one
  );

  res
    .status(200)
    .json({ contact: updatedContact, message: "Contact updated successfully" });
});

//@desc Delete a contact
//@route DELETE /api/v1/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contactId = req.params.id;

  const contact = await contactModel.findById(contactId);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const deletedContact = await contactModel.deleteOne({ _id: contactId });
  // console.log("deletedContact:", deletedContact);

  res.status(200).json({ contact, message: "Contact deleted successfully" });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
