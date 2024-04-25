//@desc Get all contacts
//@route GET /api/v1/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create a contact
//@route POST /api/v1/contacts
//@access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create a contact" });
};

//@desc Get a contact
//@route GET /api/v1/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: "Get a contact" });
};

//@desc Update a contact
//@route PUT /api/v1/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: "Update a contact" });
};

//@desc Delete a contact
//@route DELETE /api/v1/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: "Delete a contact" });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
