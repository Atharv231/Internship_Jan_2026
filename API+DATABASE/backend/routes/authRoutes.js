const express = require("express");
const router = express.Router();
const users = require("../database/Users");

// const users = [{ username: "admin", password: "1234" }];
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await users.findOne({
      where: {
        username: username,
        password: password,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    res.json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

router.get("/Users", async (req, res) => {
  try {
    const login = await users.findAll(); // fetch all tasks from DB
    res.json(login);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
