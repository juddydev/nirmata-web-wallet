// index.js
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const connectDB = require("./config/db");

// connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mainRouter = require("./src/route/mainRouter");

app.use(cors());
app.use(express.json());
app.use("/api", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
