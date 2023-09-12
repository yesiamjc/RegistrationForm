const express  = require("express");
const router = express.Router();

const {enteredContact} = require("../controller/create");

router.post("/create", enteredContact);

module.exports = router;