import React from 'react';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Users, 
  BarChart2, 
  MessageSquare, 
  Code 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, text: 'Dashboard', active: true },
    { icon: <FolderOpen size={20} />, text: 'Projects', active: false },
    { icon: <Users size={20} />, text: 'Teams', active: false },
    { icon: <BarChart2 size={20} />, text: 'Analytics', active: false },
    { icon: <MessageSquare size={20} />, text: 'Messages', active: false },
    { icon: <Code size={20} />, text: 'Integrations', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r h-full flex flex-col">
      {/* Logo */}
      <div className="p-4 flex items-center space-x-2">
        <div className="w-8 h-8 rounded bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white font-bold">
          M
        </div>
        <span className="text-xl font-semibold">Logo</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 mt-4">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`flex items-center px-4 py-3 text-sm ${
                  item.active 
                    ? 'bg-pink-500 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Promo Section */}
      <div className="p-4 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <div className="flex justify-center mb-3">
            <img src="/api/placeholder/180/120" alt="Promo" className="rounded" />
          </div>
          <p className="font-medium text-gray-800">V2.0 is available</p>
          <button className="mt-2 w-full border border-gray-300 rounded py-2 px-4 text-sm">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;