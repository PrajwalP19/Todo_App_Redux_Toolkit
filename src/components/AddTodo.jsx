import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    dispatch(addTodo(input));
    setInput('');
  };

  return (
   <form
  onSubmit={addTodoHandler}
  className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-3 w-full max-w-2xl mx-auto px-4"
>
  <input
    type="text"
    className="w-full sm:flex-1 bg-[#1e1e2f] rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-white py-2.5 px-4 text-base placeholder-gray-400 transition-all duration-200 shadow-sm"
    placeholder="Enter a Todo..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button
    type="submit"
    className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    Add Todo
  </button>
</form>

  );
}

export default AddTodo;
