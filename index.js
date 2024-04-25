const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// contacts routes
const contactsRoutes = require("./routes/contacts");

// use all routes
app.use("/api/v1/", contactsRoutes);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
