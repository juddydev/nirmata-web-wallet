const express = require("express");
const router = express.Router();

const getData = require("../controller/getData");
const register = require("../controller/register");
const createWallet = require("../controller/createWallet");

router.get("/data", getData.getAPI);
router.post("/register", register.register);
router.post("/login", register.login);
router.post("/create-wallet", createWallet.createWallet);

module.exports = router;
