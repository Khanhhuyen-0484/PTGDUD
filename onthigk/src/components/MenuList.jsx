import React, { useContext } from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap'
import {CartContext} from '../CartContext'
function MenuList({items}) {

const {addToCart} = useContext(CartContext);

  return (
    <>
      <Row>
          {items.map((item) => (
            <Col className='mb-4' md={4} key={item.id}>
            <Card>
              <Card.Img src={item.image} />
              <Card.Body>
                <Card.Title>
                  {item.name}
                </Card.Title>
                <Card.Text>
                  Giá : {item.price} VND
                </Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <Button variant='primary' onClick={()=> addToCart(item)}>
                  Chọn món
                </Button>
              </Card.Body>
            </Card>
          </Col>
          ))}
      </Row>

    </>
  )
}

export default MenuList;