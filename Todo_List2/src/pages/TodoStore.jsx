import { create } from "zustand";
import { persist } from "zustand/middleware";
import Todo from "./Todo";

console.log("✅ TodoStore loaded");

const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [],

      addTodo: (text) => {
        if (!text.trim()) return;

        set({
          todos: [
            ...get().todos,
            {
              id: Date.now(),
              text,
              done: false,
            },
          ],
        });
      },

      toggleTodo: (id) =>
        set({
          todos: get().todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          ),
        }),

      removeTodo: (id) =>
        set({
          todos: get().todos.filter((todo) => todo.id !== id),
        }),

      editTodo: (id, newText) =>
        set({
          todos: get().todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
          ),
        }),
    }),
    {
      name: "todo-storage", // localStorage key
    }
  )
);

export default useTodoStore;
