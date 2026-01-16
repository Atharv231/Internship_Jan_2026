const express = require("express");
const { TableHints } = require("sequelize");
const Task = require("../database/data");
const router = express.Router();
const cors = require("cors");
router.use(cors());

router.use(express.json());

router.post("/Task", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "title is required" });
    }

    const todo = await Task.create({
      title,
      description,
    });

    console.log("data is inserted");
    res.status(201).json(todo); // client receives the inserted task

    res.status(201).json(Task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/Task", async (req, res) => {
  try {
    const tasks = await Task.findAll(); // fetch all tasks from DB
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// const users = [
//   { username: "admin", password: "1234" },
//   { username: "atharv", password: "pass123" },
// ];

// router.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );

//   if (user) {
//     res.json({ success: true });
//   } else {
//     res.json({ success: false, message: "Invalid credentials" });
//   }
// });

// router.post('/data', (req, res) =>{

//     console.log(req.body);
//     res.json(req.body);
//     console.log("Data received successfully");

// });

exports.router = router;
