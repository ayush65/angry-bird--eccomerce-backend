/** @format */
const express = require("express");
const product = require("./routes/productRoutes");

const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://angry-bird-eccomerce-frontend.vercel.app",
  })
);

app.use(express.json());

app.use("/api/v1", product);

module.exports = app;
