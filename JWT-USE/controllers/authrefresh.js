const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Users = require("../database/Users");

module.exports = (req, res, next) => {
  const refresh_token = req.cookies.refresh_token;

  if (!refresh_token) {
    return res.status(401).json({ message: "No token found" });
  }

  try {
    const decoded = jwt.verify(refresh_token, process.env.JWT_SECRET);
    req.user = decoded;
    const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    res.cookie("access_token", access_token, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      sameSite: "lax",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
