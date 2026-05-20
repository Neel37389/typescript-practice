"use client";

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { id: todos.length + 1, text: input, completed: false },
    ]);
    setInput(" ");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8 gap-4">
      <h2 className="text-2xl font-bold">Todo List</h2>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Todo"
          className="border rounded px-4 py-2"
        ></input>
        <button onClick={addTodo} className="border rounded px-4 py-2">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer border rounded p-2 ${todo.completed ? "line-through text-gray-400" : ""}`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
