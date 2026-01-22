// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const Users = require("../database/Users");

// exports.register = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     if (!username || !password) {
//       return res
//         .status(400)
//         .json({ message: "Username and password required" });
//     }

//     const existingUser = await Users.findOne({ where: { username } });
//     if (existingUser) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await Users.create({
//       username,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "User registered successfully",
//       user: {
//         id: newUser.id,
//         username: newUser.username,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = await Users.findOne({ where: { username } });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // ✅ Minimal payload
//     const payload = {
//       sub: user.id,
//     };

//     const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: "15m",
//     });

//     const refresh_token = jwt.sign(payload, process.env.JWT_REFRESH, {
//       expiresIn: "7d",
//     });

//     // ✅ Access token cookie
//     res.cookie("access_token", access_token, {
//       httpOnly: true,
//       secure: false, // true in production (HTTPS)
//       sameSite: "lax",
//       maxAge: 15 * 60 * 1000, // 15 minutes
//     });

//     // ✅ Refresh token cookie
//     res.cookie("refresh_token", refresh_token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "lax",
//       maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
//     });

//     res.json({ message: "Login successful" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.dashboard = (req, res) => {
//   res.json({
//     message: "Protected data",
//     user: req.user,
//   });
// };
