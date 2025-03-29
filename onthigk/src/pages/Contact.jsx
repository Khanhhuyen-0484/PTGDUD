import React from 'react';
import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <Container style={{ textAlign: "center", padding: "40px 0" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        📞 Liên hệ với chúng tôi
      </h2>
      
      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        📌 <strong>Địa chỉ:</strong> 123 CMT8, Quận 1, Tp.HCM
      </p>
      
      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        📞 <strong>Số điện thoại:</strong> <a href="tel:0989989898" style={{ textDecoration: "none", color: "black" }}>0989989898</a>
      </p>
      
      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        ✉️ <strong>Email:</strong> <a href="mailto:huyenrestaurant@gmail.com" style={{ textDecoration: "none", color: "black" }}>huyenrestaurant@gmail.com</a>
      </p>

      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        ⏰ <strong>Giờ mở cửa:</strong> 10:00 AM - 10:00 PM (Tất cả các ngày trong tuần)
      </p>

      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        🌍 <strong>Theo dõi chúng tôi:</strong>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px", textDecoration: "none", color: "blue" }}>Facebook</a> |
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px", textDecoration: "none", color: "purple" }}>Instagram</a> |
        <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px", textDecoration: "none", color: "green" }}>Zalo</a>
      </p>

      {/* Thêm bản đồ Google Maps */}
      <div style={{ marginTop: "20px" }}>
        <iframe
          title="Google Map"
          width="80%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Ho+Chi+Minh+City"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
}

export default Contact;
