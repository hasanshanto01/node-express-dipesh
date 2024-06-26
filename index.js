const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConfig");

// database connection
connectDB();

const app = express();

const port = process.env.PORT || 5000;

// contacts routes
const contactsRoutes = require("./routes/contactsRoutes");
const usersRoutes = require("./routes/usersRoutes");

// middleware
app.use(express.json()); // for parsing data stream provided by client

// use all routes
app.use("/api/v1/contacts", contactsRoutes);
app.use("/api/v1/users", usersRoutes);

app.use(errorHandler); // for handling error [need to place after all other middleware and route handlers so that it catches any errors that may occur during the processing of requests.]

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
