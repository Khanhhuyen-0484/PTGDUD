import React from 'react'
import {Navbar ,Container, Nav, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  return (
        <Navbar>
            <Container>
                <Navbar.Brand as={Link}>HUYEN Restaurant</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-between'>
                    <Nav className=''>
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/menu" >Menu</Nav.Link>
                        <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Button as={Link} to='/booktable' variant='outline-info'>
                            BookTable
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default Header;