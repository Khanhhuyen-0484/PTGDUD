import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiPieChart,
  FiFolder,
  FiUsers,
  FiMessageSquare,
  FiZap,
  FiSettings // Thêm dòng này để import FiSettings
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white text-gray-800 h-screen fixed left-0 top-0 p-4 flex flex-col border-r border-gray-200">
      {/* Logo/Title */}
      <div className="text-xl font-bold mb-8 p-2 border-b border-gray-200">
        LOGO
      </div>
      
      {/* Main Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1">
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg hover:bg-pink-700 hover:text-white transition-colors ${
                  isActive ? 'bg-pink-700 text-white font-medium' : ''
                }`
              }
            >
              <FiPieChart className="mr-3 text-lg" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg hover:bg-pink-700 hover:text-white transition-colors ${
                  isActive ? 'bg-pink-700 text-white font-medium' : ''
                }`
              }
            >
              <FiFolder className="mr-3 text-lg" />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/teams" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg hover:bg-pink-700 hover:text-white transition-colors ${
                  isActive ? 'bg-pink-700 text-white font-medium' : ''
                }`
              }
            >
              <FiUsers className="mr-3 text-lg" />
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/messenger" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg hover:bg-pink-700 hover:text-white transition-colors ${
                  isActive ? 'bg-pink-700 text-white font-medium' : ''
                }`
              }
            >
              <FiMessageSquare className="mr-3 text-lg" />
              Messenger
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/integrations" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg hover:bg-pink-700 hover:text-white transition-colors ${
                  isActive ? 'bg-pink-700 text-white font-medium' : ''
                }`
              }
            >
              <FiZap className="mr-3 text-lg" />
              Integrations
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Bottom Settings */}
      <div className="mt-auto pt-4 border-t border-gray-200">
        <NavLink 
          to="/settings" 
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg hover:bg-pink-700 hover:text-white transition-colors ${
              isActive ? 'bg-pink-700 text-white font-medium' : ''
            }`
          }
        >
          <FiSettings className="mr-3 text-lg" />
          Settings
        </NavLink>
      </div>
    </div>
  );
};
// ... (phần code component)

// Thêm dòng này ở cuối file
export default Sidebar;