const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./utils/config.js");

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
