/** @format */

const express = require("express");

const app = require("./app");

// console.log(express);

const port = 4000;

app.listen(port, () => {
  console.log(`starting server o port ${port}`);
});

app.use("/", (req, res) => {
  res.json({ message: "hi" });
});
