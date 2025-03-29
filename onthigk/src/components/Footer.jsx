import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div style={{ height: "300px", backgroundColor: "black", color: "white", padding: "20px 0", marginTop: "50px" }}>
      <Container style={{ textAlign: "center" }}>
       
        {/* Giới thiệu nhà hàng */}
        <p style={{ fontSize: "16px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", marginBottom: "10px" }}>
          <strong>HUYEN RESTAURANT</strong> là điểm đến lý tưởng cho những tín đồ ẩm thực. Chúng tôi cung cấp các món ăn ngon, nguyên liệu tươi sạch và không gian ấm cúng để mang lại trải nghiệm tốt nhất cho khách hàng.
        </p>

        {/* Thông tin liên hệ */}
        <p style={{ fontSize: "16px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", marginBottom: "10px" }}>
          📌 <strong>Địa chỉ:</strong> 123 Đường CMT8, Quận 1, TP. HCM  
          <br />📞 <strong>Hotline:</strong> 0123 456 789  
          <br />🕒 <strong>Giờ mở cửa:</strong> 10:00 AM - 10:00 PM (Hằng ngày)
        </p>

        {/* Mạng xã hội */}
        <div style={{ fontSize: "24px", marginTop: "10px" }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", margin: "0 10px" }}>
            <FaTwitter />
          </a>
        </div>

        {/* Thương hiệu nhà hàng */}
        <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
          HUYEN RESTAURANT  
          <div style={{ fontSize: "14px", fontStyle: "italic" }}>TINH HOA ẨM THỰC VIỆT</div>
        </div>

      </Container>
    </div>
  );
}

export default Footer;
