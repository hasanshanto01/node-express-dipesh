const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// ***** different ways to declare route *****

// ***** without controller *****
// router.route("/contacts").get((req, res) => {
//   res.status(200).json({ message: "Get all contacts" });
// });

// router.get("/contacts", (req, res) => {
//   res.status(200).json({ message: "Get all contacts" });
// });
// ***** without controller *****

// ***** with controller *****
// router.route("/contacts").get(getContacts);

// router.get("/contacts", getContacts);
// ***** with controller *****

// ***** different ways to declare route *****

router.route("/contacts").get(getContacts);
router.route("/contacts").post(createContact);
router.route("/contacts/:id").get(getContact);
router.route("/contacts/:id").put(updateContact);
router.route("/contacts/:id").delete(deleteContact);

// ***** optimize route controller defination *****

// router.route("/contacts").get(getContacts).post(createContact);

// router
//   .route("/contacts/:id")
//   .get(getContact)
//   .put(updateContact)
//   .delete(deleteContact);

// ***** optimize route controller defination *****

module.exports = router;
