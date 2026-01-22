const express = require("express");
const router = express.Router();
const { login, register, dashboard } = require("../controllers/authController");
const { refresh } = require("../controllers/authrefresh");

const authMiddleware = require("../middleware/authMiddleware");

// public
router.post("/login", login);
router.post("/register", register);
router.post("/re", refresh);

// protected
router.get("/dashboard", authMiddleware, dashboard);

module.exports = router;
