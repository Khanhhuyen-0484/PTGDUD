import React from 'react';
import { Container, Image } from 'react-bootstrap';
import MenuList from '../components/MenuList';
import { menuList } from '../data/menu';

function Home() {
  return (
    <Container>
      {/* Hình ảnh nhà hàng */}
      <Image 
        src="src/img/Nha-hang-Ngoc-Suong.jpg" 
        alt="HUYEN RESTAURANT"
        style={{ width: "100%", maxWidth: "1000px", display: "block", margin: "0 auto", borderRadius: "10px" }}
      />

      {/* Giới thiệu nhà hàng */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>🍽️ Chào mừng đến với HUYEN RESTAURANT! 🎉</h1>
        <h4>✨ Thưởng thức hương vị tuyệt vời với giá cả hợp lý ✨</h4>
        
      </div>

      {/* Danh sách món ăn */}
      <h2 style={{ textAlign: "center", marginTop: "30px", marginBottom: "20px" }}>📋 Thực đơn nổi bật</h2>
      <MenuList items={menuList} />
    </Container>
  );
}

export default Home;
