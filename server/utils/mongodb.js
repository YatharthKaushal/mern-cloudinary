const mongoose = require("mongoose");

// Connect DB

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("> MONGODB: DB connected!"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
