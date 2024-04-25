const express = require("express");
const router = express.Router();

router.get("/contacts", (re, res) => {
  res.send("This is contacts");
});

module.exports = router;
