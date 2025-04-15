import React, { useState, useEffect } from 'react';

const EditModal = ({ 
  customer, 
  onClose, 
  onSubmit, 
  mode = 'edit',
  batchSize = 1,
  onBatchSizeChange,
  batchCustomers = [],
  onBatchCustomerChange
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    value: '',
    date: '',
    status: 'New'
  });

  useEffect(() => {
    if (customer && mode === 'edit') {
      setFormData({
        name: customer.name,
        company: customer.company,
        value: customer.value.replace('$', ''),
        date: customer.date,
        status: customer.status
      });
    }
  }, [customer, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(mode === 'import' ? batchCustomers : formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{mode === 'import' ? 'Import Customers' : (customer ? 'Edit Customer' : 'Add Customer')}</h2>
        
        <form onSubmit={handleSubmit}>
          {mode === 'import' && (
            <div className="form-group">
              <label>Number of Customers:</label>
              <input
                type="number"
                min="1"
                max="10"
                value={batchSize}
                onChange={onBatchSizeChange}
                className="w-20 p-2 border rounded"
              />
            </div>
          )}

          {mode === 'import' ? (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {Array.from({ length: batchSize }).map((_, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gray-50">
                  <h3 className="font-medium mb-3">Customer #{index + 1}</h3>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      value={batchCustomers[index]?.name || ''}
                      onChange={(e) => onBatchCustomerChange(index, 'name', e.target.value)}
                      required
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Company:</label>
                    <input
                      type="text"
                      value={batchCustomers[index]?.company || ''}
                      onChange={(e) => onBatchCustomerChange(index, 'company', e.target.value)}
                      required
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Order Value ($):</label>
                    <input
                      type="number"
                      value={batchCustomers[index]?.value || ''}
                      onChange={(e) => onBatchCustomerChange(index, 'value', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Order Date:</label>
                    <input
                      type="date"
                      value={batchCustomers[index]?.date || ''}
                      onChange={(e) => onBatchCustomerChange(index, 'date', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Status:</label>
                    <select
                      value={batchCustomers[index]?.status || 'New'}
                      onChange={(e) => onBatchCustomerChange(index, 'status', e.target.value)}
                      className="w-full p-2 border rounded"
                    >
                      <option value="New">New</option>
                      <option value="In-progress">In-progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="form-group">
                <label>Company:</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="form-group">
                <label>Order Value ($):</label>
                <input
                  type="number"
                  name="value"
                  value={formData.value}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="form-group">
                <label>Order Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="form-group">
                <label>Status:</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </>
          )}
          
          <div className="flex justify-end space-x-3 mt-6">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
            >
              {mode === 'import' ? 'Import All' : (customer ? 'Update' : 'Add')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;