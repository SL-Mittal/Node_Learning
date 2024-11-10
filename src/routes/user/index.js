const express = require("express");
const { addUser, getUser } = require("../../controllers/user");

const router = express.Router();

router.post("/add", addUser);
router.get("/:id", getUser);

module.exports = router;
