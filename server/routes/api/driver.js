const express = require("express");
const router = express.Router();

const drivController = require("../../controller/drivController");

router.post("/register", drivController.Register);
router.get("/getAllAccepted", drivController.getAllAccepted);
// router.post("/sigin", authController.signin);

module.exports = router;
