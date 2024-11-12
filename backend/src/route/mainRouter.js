const express = require("express");
const router = express.Router();

const getData = require("../controller/getData");

router.get("/data", getData.getAPI);

module.exports = router;
