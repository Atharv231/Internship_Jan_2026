📝 React Todo App

A simple and beginner-friendly Todo List application built using React.
This project focuses on understanding React hooks (useState), basic CRUD operations, and clean UI rendering.

✨ Features

➕ Add new todo tasks

☑️ Mark tasks as completed (strike-through effect)

✏️ Edit existing tasks

❌ Delete tasks

🎨 Clean and responsive UI using Tailwind CSS

🛠️ Tech Stack

React (Functional Components)

React Hooks – useState

Tailwind CSS

JavaScript (ES6+)

📂 Folder Structure
src/
 ├── components/
 │    └── Todo.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css

🧠 Logic Overview

Todos are stored as an array of objects:

{
  id: Number,
  text: String,
  done: Boolean
}


useState is used to:

Store todo list data

Handle input values

Manage edit state

React automatically updates the UI whenever state changes.

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/react-todo-app.git

2️⃣ Navigate to the project
cd react-todo-app

3️⃣ Install dependencies
npm install

4️⃣ Run the project
npm run dev

📸 Screenshots (Optional)

Add screenshots here to showcase the UI.

📘 What This Project Teaches

Understanding useState and state management

Handling forms and user input in React

Immutable state updates

Conditional rendering

Clean and readable component logic
