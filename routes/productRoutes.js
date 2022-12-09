/** @format */

const express = require("express");
const { getAllProducts } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.get("/", (req, res) => {
  res.json({
    message: "this is api/v1 route",
  });
});

module.exports = router;
