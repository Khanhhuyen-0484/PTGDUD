import React, { useState, useEffect } from 'react';
import { getCustomers, addCustomer, updateCustomer, deleteCustomer } from '../services/api';
import MetricCards from './MetricCards';
import CustomerTable from './CustomerTable';
import EditModal from './EditModal';
import '../App.css';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(6);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch customers on component mount
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      // Uncomment this to use real API
      // const data = await getCustomers();
      // setCustomers(data);
      
      // Mock data for testing
      const mockCustomers = [
        { id: 1, name: 'Elizabeth Lee', avatar: '/placeholder-avatar.png', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New' },
        { id: 2, name: 'Carlos Garcia', avatar: '/placeholder-avatar.png', company: 'SmooozeShift', value: '$747', date: '24/07/2023', status: 'New' },
        { id: 3, name: 'Elizabeth Bailey', avatar: '/placeholder-avatar.png', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress' },
        { id: 4, name: 'Ryan Brown', avatar: '/placeholder-avatar.png', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress' },
        { id: 5, name: 'Ryan Young', avatar: '/placeholder-avatar.png', company: 'DataStream Inc.', value: '$769', date: '01/09/2023', status: 'Completed' },
        { id: 6, name: 'Hailey Adams', avatar: '/placeholder-avatar.png', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'Completed' },
      ];
      setCustomers(mockCustomers);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching customers:', error);
      setLoading(false);
    }
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      // Uncomment to use real API
      // await deleteCustomer(id);
      
      // Update local state
      setCustomers(customers.filter(customer => customer.id !== id));
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  const handleSubmit = async (customerData) => {
    try {
      if (editingCustomer) {
        // Update existing customer
        // Uncomment to use real API
        // const updated = await updateCustomer(editingCustomer.id, customerData);
        
        // Update local state
        setCustomers(customers.map(c => c.id === editingCustomer.id ? { ...c, ...customerData } : c));
      } else {
        // Add new customer
        // Uncomment to use real API
        // const added = await addCustomer(customerData);
        
        // Update local state with mock ID
        const newCustomer = {
          id: customers.length + 1,
          ...customerData,
          date: new Date().toLocaleDateString('en-GB')
        };
        setCustomers([...customers, newCustomer]);
      }
      setShowModal(false);
    } catch (error) {
      console.error('Error saving customer:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate metrics
  const turnover = customers.reduce((sum, customer) => sum + Number(customer.value.replace('$', '')), 0);
  const profit = turnover * 0.35; // Assuming 35% profit margin
  const newCustomers = customers.filter(c => c.status === 'New').length;

  return (
    <div className="dashboard-container ml-64 p-8"> {/* Thêm margin-left để tránh sidebar */}
      <div className="text-2xl font-bold mb-6">Dashboard</div>
      
      {/* Phần Overview với các thẻ metric */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Thẻ Turnover - Màu hồng nhạt như trong hình */}
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-gray-600 text-sm font-medium">Turnover</h3>
            <p className="text-2xl font-bold my-2">${turnover.toLocaleString()}</p>
            <p className="text-pink-500 text-sm">+5.39% period of change</p>
          </div>

          {/* Thẻ Profit - Màu xanh nhạt như trong hình */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-gray-600 text-sm font-medium">Profit</h3>
            <p className="text-2xl font-bold my-2">${profit.toLocaleString()}</p>
            <p className="text-blue-500 text-sm">+5.39% period of change</p>
          </div>

          {/* Thẻ New customer - Màu xanh nhạt như trong hình */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-gray-600 text-sm font-medium">New customer</h3>
            <p className="text-2xl font-bold my-2">{newCustomers}</p>
            <p className="text-green-500 text-sm">+6.84% period of change</p>
          </div>
        </div>
      </div>

      {/* Phần Detailed Report */}
      <section className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            <span className="text-pink-500 mr-2">📊</span> Detailed report
          </h2>
          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-1 text-pink-500 border border-pink-200 rounded-md text-sm">
              <span className="mr-1">🔄</span> Import
            </button>
            <button className="flex items-center px-3 py-1 text-pink-500 border border-pink-200 rounded-md text-sm">
              <span className="mr-1">⬇️</span> Export
            </button>
          </div>
        </div>
        
        <CustomerTable
          customers={customers}
          currentPage={currentPage}
          customersPerPage={customersPerPage}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPageChange={handlePageChange}
          loading={loading}
        />
      </section>

      {showModal && (
        <EditModal
          customer={editingCustomer}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Dashboard;