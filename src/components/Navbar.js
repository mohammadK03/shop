import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';

function BasicExample() {
  const { data: navs, loading } = useFetch('https://fakestoreapi.com/products/categories');
  console.log(navs)

  return (
    <Navbar variant='dark' className='navbar' expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shop</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          {
            navs && (
              navs.map((nav, i) => {
                return (
                  <Nav className='me-3' key={i}>
                    <Link to={`/category/${nav}`}> {nav} </Link>
                  </Nav>
                )
              })
            )
          }
          <Nav className='me-3'>
            <Link to="/new">New Product</Link>
          </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;