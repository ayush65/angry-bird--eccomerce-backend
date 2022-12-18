/** @format */
const express = require("express");
const product = require("./routes/productRoutes");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "https://angry-bird-eccomerce-frontend.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/v1", product);

module.exports = app;
