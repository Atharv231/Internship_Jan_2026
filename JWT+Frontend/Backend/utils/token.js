const jwt = require("jsonwebtoken");

exports.generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "60s",
  });
};

exports.generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH, {
    expiresIn: "7d",
  });
};

exports.verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH);
};
