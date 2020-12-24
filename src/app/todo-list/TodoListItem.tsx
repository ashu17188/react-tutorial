import React from "react";
import "./TodoListItem.scss";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <div>
      <h1 className="title">Hello Webpack!</h1>
      <li>
        <label
          style={{ textDecoration: todo.complete ? "line-through" : undefined }}
        >
          <input
            type="checkbox"
            checked={todo.complete}
            onClick={() => {
              toggleTodo(todo);
            }}
          />{" "}
          {todo.text}
        </label>
      </li>
    </div>
  );
};
