/** @format */

import express from "express";

const app = express();

// console.log(express);

const port = 4000;

app.listen(port, () => {
  console.log(`starting server o port ${port}`);
});

app.use("/", (req, res) => {
  res.json({ message: "hi" });
});
