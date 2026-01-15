const express = require("express");
const router = express.Router();
const Todo = require("../model/data");

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "title is required" });
    }

    const todo = await Todo.create({
      title,
      description,
    });

    console.log("data is inserted");

    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, isCompleted } = req.body;
//     const todo = await Todo.findByPk(id);
//     if (!todo) {
//       return res.status(404).json({ message: "Todo not found" });
//     }
//     await todo.update({ title, description, isCompleted });
//     res.status(200).json(todo);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });
//CRUD
router.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
router.post("/:userid", (req, res) => {
  const a = req.params;
  console.log(a);
  //   res.json(req.body);
});

router.get("/", (req, res) => {
  console.log(req.query);
  res.json(req.body);
});
exports.router = router;
