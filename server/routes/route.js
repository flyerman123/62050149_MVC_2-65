// routes : define api list and its controller

const path = require("path");

const express = require("express");

const MessageController = require("../controllers/controller");

const router = express.Router();

// /users => GET
router.get("/message", MessageController.getMessage);
router.post("/message", MessageController.newMessage);
module.exports = router;
