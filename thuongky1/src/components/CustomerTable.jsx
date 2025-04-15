import React from 'react';
import Pagination from './Pagination';

const CustomerTable = ({ customers, currentPage, customersPerPage, onEdit, onDelete, onPageChange, loading }) => {
  // Pagination logic
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>CUSTOMER NAME</th>
            <th>COMPANY</th>
            <th>ORDER VALUE</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.company}</td>
              <td>{customer.value}</td>
              <td>{customer.date}</td>
              <td>
                <span className={`status-badge ${customer.status.toLowerCase()}`}>
                  {customer.status}
                </span>
              </td>
              <td>
                <button onClick={() => onEdit(customer)} className="action-button edit">Edit</button>
                <button onClick={() => onDelete(customer.id)} className="action-button delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Pagination
        itemsPerPage={customersPerPage}
        totalItems={customers.length}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CustomerTable;