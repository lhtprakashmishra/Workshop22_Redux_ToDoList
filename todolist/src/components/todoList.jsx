import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, removeTodo, toggleTodo } from "../reducers/addReducer"; // Adjust the path accordingly

const TodoList = () => {
  const [inputValue, setInputValue] = useState(""); // Local state for input
  const todos = useSelector((state) => state.todos.todos); // Select todos from the store
  const dispatch = useDispatch(); // Get the dispatch function

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue)); // Dispatch the addTodo action
      setInputValue(""); // Clear the input after adding
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id)); // Dispatch the toggleTodo action to toggle completion
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id)); // Dispatch the removeTodo action to delete the todo
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold mb-4 text-2xl">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 rounded mr-2"
            placeholder="Add a task"
            value={inputValue} // Set the input value from state
            onChange={(e) => setInputValue(e.target.value)} // Update local state
          />
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>

        <ul className="w-full max-w-md">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded mb-2 shadow"
            >
              <span
                className={todo.completed ? "line-through" : ""}
                onClick={() => handleToggleTodo(todo.id)} // Corrected to use toggleTodo
              >
                {todo.text}
              </span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => handleDeleteTodo(todo.id)} // Corrected to use removeTodo
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
