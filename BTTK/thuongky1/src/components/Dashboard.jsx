import React, { useState, useEffect } from 'react';
import { ShoppingCart, DollarSign, Settings } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import DetailedReport from '../components/DetailedReport';
import Pagination from '../components/Pagination';
import { fetchDashboardData, fetchCustomers } from '../api/apiService';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(11);
  const [totalResults, setTotalResults] = useState(63);

  // Fetch data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // In a real app, you would uncomment these lines to fetch real data
        // const dashboardData = await fetchDashboardData();
        // const customersData = await fetchCustomers(currentPage, 10);
        
        // For demo purposes, we're using mock data
        const mockStats = [
          { 
            title: 'Turnover', 
            value: '$92,405', 
            change: '+5.39%', 
            buttonIcon: <ShoppingCart size={18} />, 
            color: 'bg-pink-50' 
          },
          { 
            title: 'Profit', 
            value: '$32,218', 
            change: '+5.39%', 
            buttonIcon: <DollarSign size={18} />, 
            color: 'bg-blue-50' 
          },
          { 
            title: 'New customer', 
            value: '298', 
            change: '+6.84%', 
            buttonIcon: <Settings size={18} />, 
            color: 'bg-blue-50' 
          },
        ];
        
        const mockCustomers = [
          { id: 1, name: 'Elizabeth Lee', avatar: '/api/placeholder/32/32', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'new' },
          { id: 2, name: 'Carlos Garcia', avatar: '/api/placeholder/32/32', company: 'SmooozeShift', value: '$747', date: '24/07/2023', status: 'new' },
          { id: 3, name: 'Elizabeth Bailey', avatar: '/api/placeholder/32/32', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'in-progress' },
          { id: 4, name: 'Ryan Brown', avatar: '/api/placeholder/32/32', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'in-progress' },
          { id: 5, name: 'Ryan Young', avatar: '/api/placeholder/32/32', company: 'DataStream Inc.', value: '$769', date: '01/09/2023', status: 'completed' },
          { id: 6, name: 'Hailey Adams', avatar: '/api/placeholder/32/32', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'completed' },
        ];
        
        setStats(mockStats);
        setCustomers(mockCustomers);
        setLoading(false);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        setLoading(false);
      }
    };
    
    loadData();
  }, [currentPage]);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }
  
  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            buttonIcon={stat.buttonIcon}
            color={stat.color}
          />
        ))}
      </div>
      
      {/* Detailed Report */}
      <DetailedReport customers={customers} />
      
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalResults={totalResults}
      />
    </div>
  );
};

export default Dashboard;