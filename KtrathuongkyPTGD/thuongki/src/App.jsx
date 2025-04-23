import { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  // Lấy dữ liệu từ localStorage hoặc dùng mock data
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

  // Lưu vào localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Thống kê
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  // Xử lý thêm công việc
  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false
    }]);
    setNewTodo('');
  };

  // Xử lý xóa công việc
  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa?')) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  // Xử lý toggle trạng thái
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Lọc công việc
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
          <span className="font-medium text-gray-700">Tổng: {totalTodos}</span>
          <span className="font-medium text-green-600">Hoàn thành: {completedTodos}</span>
          <span className="font-medium text-amber-600">Còn lại: {totalTodos - completedTodos}</span>
        </div>
        
        {/* Form thêm mới */}
        <div className="flex mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
            placeholder="Nhập công việc mới..."
            className="flex-1 px-4 py-2 border border-gray-300 text-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          {['all', 'active', 'completed'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg capitalize ${
                filter === type 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {type === 'all' ? 'Tất cả' : type === 'active' ? 'Chưa hoàn thành' : 'Đã hoàn thành'}
            </button>
          ))}
        </div>
        
        {/* Danh sách công việc - Sử dụng TodoItem component */}
        <ul className="space-y-3">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleComplete}
                onDelete={handleDelete}
              />
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