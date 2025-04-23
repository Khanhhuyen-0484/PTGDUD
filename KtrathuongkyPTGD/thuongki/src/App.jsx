import { useState } from 'react';

function App() {
  // Mock data - danh sách công việc mẫu
  const initialTodos = [
    { id: 1, text: 'Học ReactJS', completed: false },
    { id: 2, text: 'Làm bài tập Todo App', completed: true },
    { id: 3, text: 'Deploy lên Vercel', completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  // Hàm xử lý xoá công việc
  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa công việc này?')) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  // Hàm chuyển đổi trạng thái
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Danh sách công việc</h1>
        
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li 
              key={todo.id} 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4 flex-grow">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
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
                  onClick={() => handleDelete(todo.id)}
                  className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors duration-200"
                >
                  Xóa
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;