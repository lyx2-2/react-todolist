import { useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import "./styles.css";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (!localValue) return [];
    return JSON.parse(localValue);
  }); // 待办事项是一个数组

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos), [todos]);
  }, [todos]);

  function addTodos(title) {
    setTodos((current) => [
      ...current,
      { id: crypto.randomUUID(), title, completed: false },
    ]); // ...扩展运算符
  }

  function toggleTodo(id, completed) {
    setTodos((current) => {
      return current.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((current) => current.filter((todo) => todo.id != id)); // 如果todo.id和当前传入id不是同一个id,表明不是我想删掉的todo
  }

  return (
    <>
      <NewTodoForm addTodos={addTodos} />

      <h1 className="header">To Do List</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
