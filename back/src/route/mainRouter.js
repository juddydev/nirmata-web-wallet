const express = require("express");
const router = express.Router();

const getData = require("../controller/getData");
const register = require("../controller/register");
const createWallet = require("../controller/createWallet");

const getWalletData = require("../controller/getWalletData")

router.get("/data", getData.getAPI);
router.post("/register", register.register);
router.post("/login", register.login);
router.post("/create-wallet", createWallet.createWallet);

router.get("/get", getWalletData.getWalletData);

module.exports = router;
