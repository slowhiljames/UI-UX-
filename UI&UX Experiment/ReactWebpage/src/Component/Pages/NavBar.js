import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import dcc1 from "../images/dcc1.png";
import { Dropdown } from 'react-bootstrap';


function NavBar() {
  
  return (
    
    <div className="navbar pt-0">
      <Navbar
        variant="dark"
        expand="lg"
        className="form-control-lg text-black bg-warning "
        style={{ border: "none", borderRadius: 0 }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="mr-5 px-3 py-3 flex-fill">
            <img src={dcc1} height="40" width="60px" alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto p-1 flex-fill">
              <Nav.Link as={Link} to="/" className="nav-link text-dark cards">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                className="nav-link text-dark cards"
              >
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link text-dark cards">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link text-dark cards text-bold font-extrabold">
                Contact Us
              </Nav.Link>
            </Nav>

            <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Login     </Dropdown.Toggle>

      <Dropdown.Menu className="bg-slate-800">
        <Dropdown.Item><Link to="/login" state={{role:"client"}} className="text-decoration-none text-black">Client</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/login" state={{role:"Site-Eng"}} className="text-decoration-none text-black">Site-Engineer</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/login" state={{role:"manager"}} className="text-decoration-none text-black">Manager</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/login" state={{role:"Admin"}} className="text-decoration-none text-black">Admin</Link></Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
