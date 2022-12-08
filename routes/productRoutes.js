/** @format */

const express = require("express");
const { getAllProducts } = require("../controllers/productcontroller");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

module.exports = router;
