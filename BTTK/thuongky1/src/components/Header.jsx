import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-pink-500 text-2xl font-semibold">Dashboard</h1>
      
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 pl-10 pr-4 py-2 rounded-md w-64 focus:outline-none"
          />
        </div>
        
        {/* Icons */}
        <button className="p-1 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <HelpCircle size={20} className="text-gray-600" />
        </button>
        
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <img src="/api/placeholder/32/32" alt="User" />
        </div>
      </div>
    </header>
  );
};

export default Header;