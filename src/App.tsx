import React, { useState } from "react";
import { TodoListItem } from "./app/todo-list/TodoListItem";
import { Counter } from "./features/counter/Counter";

const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <Counter />
      <ul>
        <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
        <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
      </ul>
    </div>
  );
}
