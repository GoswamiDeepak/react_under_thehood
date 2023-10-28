import Main from "./component/Main";
import {
  todoProvider as TodoProvider,
  usetodo,
} from "../../context/todoContext";
import { useState, useEffect } from "react";

const index = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, { id: Date.now(), ...todo }];
    });
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => {
        return prevTodo.id === id ? todo : prevTodo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ deleteTodo, toggleComplete, addTodo, todos, updateTodo }}
      >
        <Main />
      </TodoProvider>
    </>
  );
};

export default index;
