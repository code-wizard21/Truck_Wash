const express = require("express");
const router = express.Router();

const washController = require("../../controller/washController");

router.post("/register", washController.Register);
router.get("/getAllList", washController.getAllList);
router.post("/getAcceptList", washController.getAcceptList);


module.exports = router;
