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
  const [modalMode, setModalMode] = useState('edit'); // 'edit' hoặc 'import'
  const [batchCustomers, setBatchCustomers] = useState([{}]); // Dữ liệu batch import
  const [batchSize, setBatchSize] = useState(1); // Số lượng khách hàng import

  // Fetch customers on component mount
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
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
    setModalMode('edit');
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

  // Thêm hàm xử lý thay đổi batch size
  const handleBatchSizeChange = (e) => {
    const size = Math.max(1, Math.min(10, parseInt(e.target.value) || 1));
    setBatchSize(size);
    
    // Cập nhật batchCustomers
    const newBatchCustomers = [];
    for (let i = 0; i < size; i++) {
      newBatchCustomers.push(batchCustomers[i] || {});
    }
    setBatchCustomers(newBatchCustomers);
  };

  // Thêm hàm xử lý thay đổi dữ liệu batch
  const handleBatchCustomerChange = (index, field, value) => {
    const newBatchCustomers = [...batchCustomers];
    newBatchCustomers[index] = {
      ...newBatchCustomers[index],
      [field]: value
    };
    setBatchCustomers(newBatchCustomers);
  };

  // Thêm hàm xử lý import nhiều khách hàng
  const handleBatchImport = () => {
    const newCustomers = batchCustomers.map((customer, index) => ({
      ...customer,
      id: customers.length + index + 1,
      value: `$${customer.value || 0}`,
      date: customer.date || new Date().toLocaleDateString('en-GB'),
      status: customer.status || 'New',
      avatar: '/placeholder-avatar.png'
    })).filter(c => c.name && c.company); // Chỉ lấy những customer có đủ thông tin

    if (newCustomers.length > 0) {
      setCustomers([...customers, ...newCustomers]);
      setShowModal(false);
      setBatchCustomers([{}]); // Reset batch
      setBatchSize(1);
    }
  };

  const handleSubmit = async (customerData) => {
    if (modalMode === 'import') {
      handleBatchImport();
      return;
    }

    try {
      if (editingCustomer) {
        // Update existing customer
        // Uncomment to use real API
        // const updated = await updateCustomer(editingCustomer.id, customerData);
        
        // Update local state
        setCustomers(customers.map(c => c.id === editingCustomer.id ? { 
          ...c, 
          ...customerData,
          value: `$${customerData.value}`
        } : c));
      } else {
        // Add new customer
        // Uncomment to use real API
        // const added = await addCustomer(customerData);
        
        // Update local state with mock ID
        const newCustomer = {
          id: customers.length + 1,
          ...customerData,
          value: `$${customerData.value || 0}`,
          date: customerData.date || new Date().toLocaleDateString('en-GB'),
          status: customerData.status || 'New',
          avatar: '/placeholder-avatar.png'
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
    <div className="dashboard-container ml-64 p-8">
      <div className="text-2xl font-bold mb-6">Dashboard</div>
      
      {/* Phần Overview với các thẻ metric */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-gray-600 text-sm font-medium">Turnover</h3>
            <p className="text-2xl font-bold my-2">${turnover.toLocaleString()}</p>
            <p className="text-pink-500 text-sm">+5.39% period of change</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-gray-600 text-sm font-medium">Profit</h3>
            <p className="text-2xl font-bold my-2">${profit.toLocaleString()}</p>
            <p className="text-blue-500 text-sm">+5.39% period of change</p>
          </div>

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
            <span className="text-pink-500 mr-2"></span> Detailed report
          </h2>
          <div className="flex space-x-2">
            <button 
              className="flex items-center px-3 py-1 text-pink-500 border border-pink-200 rounded-md text-sm hover:bg-pink-50"
              onClick={() => {
                setModalMode('import');
                setEditingCustomer(null);
                setShowModal(true);
              }}
            >
              <span className="mr-1">📤</span> Import
            </button>
            <button 
              className="flex items-center px-3 py-1 text-pink-500 border border-pink-200 rounded-md text-sm hover:bg-pink-50"
              onClick={() => {
                setModalMode('edit');
                setEditingCustomer(null);
                setShowModal(true);
              }}
            >
              <span className="mr-1">➕</span> Add Customer
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
          onClose={() => {
            setShowModal(false);
            setBatchCustomers([{}]);
            setBatchSize(1);
          }}
          onSubmit={handleSubmit}
          mode={modalMode}
          batchSize={batchSize}
          onBatchSizeChange={handleBatchSizeChange}
          batchCustomers={batchCustomers}
          onBatchCustomerChange={handleBatchCustomerChange}
        />
      )}
    </div>
  );
};

export default Dashboard;