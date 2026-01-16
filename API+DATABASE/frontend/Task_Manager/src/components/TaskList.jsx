import { useEffect, useState } from "react";
import { getTasks, addTask } from "../services/api";
import "../App.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Load tasks on page load
  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newTask = await addTask({ title, description });
    setTasks((prev) => [newTask, ...prev]); // add on top
    setTitle("");
    setDescription("");
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
        />
        <button>Add Task</button>
      </form>

      <ul>
        {tasks.length === 0 && <p>No tasks yet</p>}

        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong>
            <div>{task.description || "No description"}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
