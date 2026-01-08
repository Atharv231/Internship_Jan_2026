import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";

function Todo() {
  // 🔹 Local UI state (this is OK)
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // 🔹 Zustand state & actions (SOURCE OF TRUTH)
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  // Add todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addTodo(input);
    setInput("");
  };

  // Start edit
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  // Save edit
  const saveEdit = (id) => {
    if (!editText.trim()) return;

    editTodo(id, editText);
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-5 rounded-lg w-[360px]">
        <h2 className="text-xl font-bold text-center mb-4">Todo List</h2>

        {/* Add Todo */}
        <form onSubmit={handleAddTodo} className="flex gap-2">
          <input
            className="border p-2 flex-1 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add task"
          />
          <button className="bg-blue-500 text-white px-3 rounded">Add</button>
        </form>

        {/* Todo List */}
        <ul className="mt-4 space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded"
            >
              <div className="flex items-center gap-2 flex-1">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />

                {editId === todo.id ? (
                  <input
                    className="border p-1 flex-1 rounded"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <span
                    className={todo.done ? "line-through text-gray-400" : ""}
                  >
                    {todo.text}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                {editId === todo.id ? (
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="text-green-600 font-bold"
                  >
                    ✔
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(todo)}
                    className="text-blue-500 font-bold"
                  >
                    ✎
                  </button>
                )}

                <button
                  onClick={() => removeTodo(todo.id)}
                  className="text-red-500 font-bold"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
