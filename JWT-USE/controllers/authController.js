const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Dummy user (replace with DB later)
const user = {
  id: 1,
  username: "admin",
  password: bcrypt.hashSync("1234", 10),
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // 1. Check username
  if (username !== user.username) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // 2. Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // 3. Create JWT
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.cookie("token", token, {
    httpOnly: true, // JS cannot access
    secure: false, // true in production (HTTPS)
    sameSite: "lax", // CSRF protection
    maxAge: 60 * 60 * 1000, // 1 hour
  });
  res.json({ message: "Login successful" });
};

exports.dashboard = (req, res) => {
  res.json({
    message: "Protected data",
    user: req.user,
  });
};
