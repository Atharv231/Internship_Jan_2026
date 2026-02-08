const bcrypt = require("bcryptjs");
const Users = require("../database/Users");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../utils/token");

/* ================= REGISTER ================= */
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ message: "Username and password required" });

    const existingUser = await Users.findOne({ where: { username } });
    if (existingUser)
      return res.status(409).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({ username, password: hashedPassword });

    res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser.id, username: newUser.username },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= LOGIN ================= */
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const payload = { sub: user.id };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // true in prod
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= CHECK AUTH ================= */
exports.checkAuth = (req, res) => {
  res.json({
    authenticated: true,
    user: req.user,
  });
};

/* ================= REFRESH TOKEN ================= */
exports.refresh = async (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken)
      return res.status(401).json({ message: "No refresh token" });

    const decoded = verifyRefreshToken(refreshToken);

    const newAccessToken = generateAccessToken({ sub: decoded.sub });

    res.cookie("access_token", newAccessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 10 * 1000, // ✅ 10 seconds
    });

    res.json({ message: "Token refreshed" });
  } catch (err) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }
};

/* ================= LOGOUT ================= */
exports.logout = (req, res) => {
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  res.json({ message: "Logged out successfully" });
};
