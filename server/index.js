const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./utils/mongodb.js");

dotenv.config();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/assignment", require("./routes/routeAssignment.js"));
app.use("/submission", require("./routes/routeSubmission.js"));

app.listen(PORT, () => {
  connectDB();
  console.log(`> Server: http://localhost:${PORT}`);
});
