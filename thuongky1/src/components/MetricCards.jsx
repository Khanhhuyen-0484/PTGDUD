import React from 'react';

const MetricCards = ({ turnover, profit, newCustomers }) => {
  // Định dạng số
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Turnover Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-gray-500 text-sm font-medium">Turnover</h3>
          <p className="text-2xl font-bold my-2">${formatNumber(turnover)}</p>
          <p className="text-green-500 text-sm">5.39% period of change</p>
        </div>

        {/* Profit Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-gray-500 text-sm font-medium">Profit</h3>
          <p className="text-2xl font-bold my-2">${formatNumber(profit)}</p>
          <p className="text-green-500 text-sm">5.39% period of change</p>
        </div>

        {/* New Customers Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-gray-500 text-sm font-medium">New customer</h3>
          <p className="text-2xl font-bold my-2">{newCustomers}</p>
          <p className="text-green-500 text-sm">6.84% period of change</p>
        </div>
      </div>
    </div>
  );
};

export default MetricCards;