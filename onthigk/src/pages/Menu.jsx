import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import MenuList from '../components/MenuList';

import { menuList } from '../data/menu'
function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/menu.json')
    .then((response) => response.json())
    .then((data) => setItems(data))
    .catch((error) => console.log(error));
  }, [])

  return (
    <Container>
      <h2>Thực đơn</h2>
      <MenuList items={menuList}/>
    </Container>
  )
}

export default Menu;