import React, { useState, useEffect } from 'react';

const EditModal = ({ customer, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    value: '',
    date: '',
    status: 'New'
  });

  useEffect(() => {
    if (customer) {
      setFormData({
        name: customer.name,
        company: customer.company,
        value: customer.value,
        date: customer.date,
        status: customer.status
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{customer ? 'Edit Customer' : 'Add New Customer'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
            />
          </div>
          
          <div className="form-group">
            <label>Order Value ($):</label>
            <input
              type="number"
              name="value"
              value={formData.value.replace('$', '')}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Order Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;