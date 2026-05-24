import { useState } from "react";
import "./App.css";

function TodoTask({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
}

function TodoList({ todos, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoTask key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddTask() {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task.trim(),
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  function handleDeleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="app-container">
      <h1>ToDo List App</h1>

      <input
        type="text"
        placeholder="Enter task description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="add-btn" onClick={handleAddTask}>
        Add Task
      </button>

      <TodoList todos={todos} onDelete={handleDeleteTask} />
    </div>
  );
}