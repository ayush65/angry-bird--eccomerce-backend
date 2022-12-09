/** @format */
const express = require("express");
const product = require("./routes/productRoutes");

const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/api/v1", product);

module.exports = app;
