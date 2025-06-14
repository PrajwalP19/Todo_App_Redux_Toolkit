import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
   <div className="max-w-2xl mx-auto px-4 mt-12">
  <h2 className="text-3xl font-bold text-white mb-8 text-center">📝 Your Todos</h2>

  {todos.length === 0 ? (
    <p className="text-gray-400 text-center italic">No todos yet. Add your first task!</p>
  ) : (
    <ul className="space-y-5">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-[#2a2a3c] border border-gray-700 rounded-xl px-6 py-4 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
        >
          <span className="text-white text-lg font-medium">{todo.text}</span>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="p-2 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 group"
            title="Delete Todo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  )}
</div>

  );
}

export default Todos;
