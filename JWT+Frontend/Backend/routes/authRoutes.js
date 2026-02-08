const express = require("express");
const router = express.Router();

const {
  login,
  register,
  logout,
  refresh,
  checkAuth,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

// public
router.post("/login", login);
router.post("/register", register);
router.post("/refresh", refresh);
router.post("/logout", logout);

// protected
router.get("/checkauth", authMiddleware, checkAuth);

module.exports = router;
