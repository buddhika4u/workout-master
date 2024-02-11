require("dotenv").config();
const express = require("express");

const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ messg: "Welcome to the app" });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
