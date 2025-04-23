import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <div className="flex items-center space-x-4 flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400 cursor-pointer"
        />
        <span 
          className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
        >
          {todo.text}
        </span>
      </div>
      
      <div className="flex items-center space-x-3">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          todo.completed 
            ? 'bg-green-100 text-green-800' 
            : 'bg-amber-100 text-amber-800'
        }`}>
          {todo.completed ? 'Hoàn thành' : 'Chưa hoàn thành'}
        </span>
        
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors duration-200"
        >
          Xóa
        </button>
      </div>
    </li>
  );
};

export default TodoItem;