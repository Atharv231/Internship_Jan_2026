// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const access_token = req.cookies.access_token;

//   if (!access_token) {
//     return res.status(401).json({ message: "No token found" });
//   }

//   try {
//     const decoded = jwt.verify(access_token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };
