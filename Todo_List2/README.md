<div align="center">

# 📝 React Todo List App  
### Zustand • Local Storage • Modern React

A **clean, fast, and minimal Todo application** built with **React** and **Zustand**, designed for real-world usage with **persistent local storage** and instant UI updates.

</div>

---

## ✨ Overview

This project demonstrates how to build a **production-ready Todo app** using modern React practices.  
State is managed globally with **Zustand**, removing unnecessary complexity while keeping the app fast and scalable.

Todos are **automatically saved** to the browser’s localStorage — no backend required.

---

## 🚀 Core Features

- ➕ Add new todos
- ✏️ Edit existing todos
- 🗑️ Delete todos
- ✅ Toggle completed / pending state
- ⚡ Instant UI updates
- 💾 Automatic localStorage persistence
- 🧠 Global state with minimal boilerplate

---

## 🧩 Tech Stack

| Technology | Purpose |
|----------|---------|
| React  | UI Library |
| Zustand | Global State Management |
| Vite | Fast Development & Build |
| JavaScript | Application Logic |
| HTML & CSS | Layout & Styling |

---

## 🗂️ Todo Data Model

Each todo item follows a simple, scalable structure:

```js
{
  id: number,
  text: string,
  completed: boolean
}
```

---

## 🧠 State Management Strategy

Instead of Redux or Context API, **Zustand** is used for:

- Cleaner logic
- Faster re-renders
- No provider wrapping
- Easy scalability

Local storage persistence is handled automatically using Zustand middleware.

---

## 🛠️ Project Setup & Run

**Requirements:** Node.js v18 or higher

```bash
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
npm install
npm install zustand
npm run dev
```

Access the app in your browser:

```text
http://localhost:5173
```

---

## 📦 Production Build

Generate an optimized build for deployment:

```bash
npm run build
```

---

## 💾 Persistence Concept (Zustand)

```js
persist(
  (set) => ({
    todos: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {}
  }),
  {
    name: "todo-storage"
  }
)
```

---

<div align="center">

⚡ **Simple. Fast. Scalable.**  
Built to showcase modern React state management done right.

</div>
