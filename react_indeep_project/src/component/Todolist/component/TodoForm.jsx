import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [data, setData] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    addTodo({
      todos: data,
      completed: false,
    });
    setData("");
  };

  return (
    <form className="flex" onSubmit={handleForm}>
      <input
        type="text"
        value={data}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setData(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
