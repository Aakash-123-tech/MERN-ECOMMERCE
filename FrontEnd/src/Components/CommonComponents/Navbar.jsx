import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { logoimage, allProducts } from '../../assets/assets';

const CustomNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => {
    setShowOffcanvas(false);
    setSearchTerm('');
  };
  const handleShow = () => setShowOffcanvas(true);

  const filteredProducts = allProducts.filter((value) =>
    value.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" className="shadow-sm sticky-top top-0 z-2">
        <Container>
          {/* Mobile Header: Logo Left - Toggle Right */}
          <div className="d-flex d-lg-none justify-content-between align-items-center w-100">
            <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 mb-0">
              <img src={logoimage.logotext} alt="Logo" style={{ width: "100px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>

          {/* Desktop Logo (Centered) */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold fs-3 d-none d-lg-block mx-auto"
          >
            <img src={logoimage.logotext} alt="Logo" className="w-50" />
          </Navbar.Brand>

          {/* Collapsible Menu */}
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
            <Nav className="mx-lg-auto flex-column flex-lg-row align-items-center align-items-lg-center">
              <Nav.Link as={Link} to="/home" className="mx-lg-2 text-dark"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>HOME</Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-lg-2 text-dark"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>ABOUT</Nav.Link>
              <Nav.Link as={Link} to="/shop" className="mx-lg-2 text-dark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>SHOP</Nav.Link>
              <Nav.Link as={Link} to="/faq" className="mx-lg-2 text-dark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>FAQ</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-lg-2 text-dark"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>CONTACT</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center justify-content-center mt-3 mt-lg-0">
              <i className="bi bi-person mx-2 fs-5 text-dark"></i>
              <i className="bi bi-search mx-2 fs-5 text-dark" onClick={handleShow} style={{ cursor: 'pointer' }}></i>
              <i className="bi bi-suit-heart mx-2 fs-5 text-dark"></i>
              <i className="bi bi-bag mx-2 fs-5 text-dark"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Search */}
      <Offcanvas className='vh-100' show={showOffcanvas}  onHide={handleClose} placement="top" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form.Control
            type="search"
            placeholder="Search by product name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />

          <div className="row mt-4">
            {searchTerm === '' ? (
              <p className="text-muted text-center">Start typing to search...</p>
            ) : filteredProducts.length === 0 ? (
              <p className="text-danger text-center">No Products Found</p>
            ) : (
              filteredProducts.map((product, index) => (
                <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
                  <div className="card h-100">
                    <img src={product.img} alt={product.name} height="200" className="card-img-top object-fit-cover" />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="fw-bold">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
