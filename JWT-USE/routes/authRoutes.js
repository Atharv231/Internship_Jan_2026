const express = require("express");
const router = express.Router();
const { login, register, dashboard } = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

// public
router.post("/login", login);
router.post("/register", register);

// protected
router.get("/dashboard", authMiddleware, dashboard);

module.exports = router;
