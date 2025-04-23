import { useState, useEffect } from 'react';

function App() {
  // Lấy dữ liệu từ localStorage hoặc dùng mock data nếu chưa có
  const getInitialTodos = () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: 'Học ReactJS', completed: false },
      { id: 2, text: 'Làm bài tập Todo App', completed: true },
      { id: 3, text: 'Deploy lên Vercel', completed: false },
    ];
  };

  const [todos, setTodos] = useState(getInitialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  // Lưu vào localStorage mỗi khi todos thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Thống kê công việc
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  // Hàm thêm công việc mới
  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    
    const newTask = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false
    };
    
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

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

  // Lọc công việc theo trạng thái
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="container mx-auto p-6 max-w-md">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Danh sách công việc</h1>
        
        {/* Thống kê */}
        <div className="flex justify-between items-center mb-4 bg-blue-50 p-3 rounded-lg">
          <span className="font-medium text-gray-700">
            Tổng: <span className="font-bold">{totalTodos}</span>
          </span>
          <span className="font-medium text-green-600">
            Hoàn thành: <span className="font-bold">{completedTodos}</span>
          </span>
          <span className="font-medium text-amber-600">
            Còn lại: <span className="font-bold">{totalTodos - completedTodos}</span>
          </span>
        </div>
        
        {/* Form thêm công việc mới */}
        <div className="flex mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
            placeholder="Nhập công việc mới..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleAddTodo}
            disabled={!newTodo.trim()}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Thêm
          </button>
        </div>

        {/* Bộ lọc */}
        <div className="flex justify-center space-x-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-lg ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Chưa hoàn thành
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Đã hoàn thành
          </button>
        </div>
        
        {/* Danh sách công việc */}
        <ul className="space-y-3">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
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
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">
              {filter === 'all' 
                ? 'Chưa có công việc nào' 
                : filter === 'completed' 
                  ? 'Không có công việc đã hoàn thành' 
                  : 'Tất cả công việc đã hoàn thành'}
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;