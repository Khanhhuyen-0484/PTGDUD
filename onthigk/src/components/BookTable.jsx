import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './BookTable.css'; // Import file CSS tùy chỉnh

function BookTable() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: '',
    date: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Thông tin đặt bàn:', formData);
    alert('Đặt bàn thành công!');
    setFormData({
      name: '',
      phone: '',
      time: '',
      date: '',
      guests: 1,
    });
  };

  return (
    <Container className="booking-container">
      <h2 className="booking-title">Đặt bàn</h2>
      <Form onSubmit={handleSubmit} className="booking-form">
        <Form.Group className="mb-3">
          <Form.Label className="form-label-custom">Họ Tên</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Nhập họ tên"
            className="form-input-custom"
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label className="form-label-custom">Số điện thoại</Form.Label>
          <Form.Control 
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="Nhập số điện thoại"
            className="form-input-custom"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label-custom">Ngày</Form.Label>
          <Form.Control 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange}
            className="form-input-custom"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label-custom">Giờ</Form.Label>
          <Form.Control 
            type="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange}
            className="form-input-custom"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label-custom">Số khách</Form.Label>
          <Form.Control 
            type="number" 
            name="guests" 
            value={formData.guests} 
            onChange={handleChange}
            min="1"
            className="form-input-custom"
          />
        </Form.Group>

        <Button type="submit" className="custom-btn">
          Đặt bàn
        </Button>
      </Form>
    </Container>
  );
}

export default BookTable;
