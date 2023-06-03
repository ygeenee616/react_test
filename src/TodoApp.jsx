import React, { useReducer, useState } from "react";

// 초기 상태를 정의합니다.
const initialState = [];

// 리듀서 함수를 정의합니다.
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, {
        id: Date.now(),
        text: action.text,
        completed: false,
      }];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error();
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "add", text });
      setText("");
    }
  };

  const handleToggle = (id) => {
    dispatch({ type: "toggle", id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete", id });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {state.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => handleToggle(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
