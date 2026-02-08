require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const authRoutes = require("./routes/authRoutes");
const sequelize = require("./utils/dbdetails");
require("./database/Users");

const PORT = process.env.PORT || 4000;

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected");

    await sequelize.sync({ alter: true });
    console.log("✅ Models synced");

    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ DB error:", err);
  }
};

startServer();
