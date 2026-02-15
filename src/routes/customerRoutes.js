const express = require("express");
const router = express.Router();
const { getCustomerById } = require("../controllers/customerController");

router.get("/:id", getCustomerById);

module.exports = router;
