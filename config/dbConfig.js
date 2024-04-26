const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO);
    // console.log("Database is connected:", connect.connection,host, connect.connection.name);
    console.log("Database is connected");
  } catch (err) {
    console.log("Database connection err:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
