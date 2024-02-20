const express = require("express");
const router = express.Router();

const washController = require("../../controller/washController");

router.post("/register", washController.Register);
// router.post("/sigin", authController.signin);

module.exports = router;
