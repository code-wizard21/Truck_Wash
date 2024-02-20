const express = require("express");
const router = express.Router();

const cusController = require("../../controller/cusController");

router.post("/register", cusController.Register);
// router.post("/sigin", authController.signin);

module.exports = router;
