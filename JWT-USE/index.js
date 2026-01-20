require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
app.use(cookieParser()); // ⭐ IMPORTANT

const PORT = process.env.PORT || 5000;

app.use(express.json());

// IMPORT ROUTES

// MOUNT ROUTES (THIS WAS MISSING)
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running..............");
});
