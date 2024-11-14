const express = require("express");
const router = express.Router();

const getData = require("../controller/getData");
const register = require("../controller/register");

router.get("/data", getData.getAPI);
router.post("/register", register.register);
router.post("/login", register.login);
module.exports = router;
