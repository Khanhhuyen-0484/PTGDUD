import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64"> {/* Padding trái bằng width sidebar */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;