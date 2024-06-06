import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import UserList from "./UserList";
import Reports from "./Reports";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddProject from "./AddProject";
import ManagerDashboardHome from "./Home";

function ManagerDash() {
    const [nav, setNav] = useState("home");
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    // logout request
    const navigate = useNavigate();

    const handleLogout = () => {
      axios.post('http://localhost:5000/logout')
        .then(res => {
          if (res.data.status === 'success') {
            localStorage.removeItem("token");
            navigate('/login');
          } else {
            console.error('Logout failed:', res.data);
          }
        })
        .catch(error => {
          console.error('Logout error:', error);
        });
    };
    return (
      <div className="p-0 vh-50">
        <div className="row">
          <div className={`col-md-3 vh-100 d-md-flex flex-column flex-shrink-0  bg-custom-color shadow-sm ${sidebarOpen ? "sidebar" : ""} `}>
            <div className="d-md-flex flex-column flex-shrink-0 p-2 py-2 bg-custom-color">
              <Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4 text-white bi bi-speedometer2"> Manager Dashboard</span>
              </Link>
              <hr  className=" text-white size-3 bg-black"/>
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item form-control-lg">
                  <Link onClick={() => setNav("home")} className={`nav-link text-white ${nav === "home" && "active"}`}>
                  <i class="bi bi-house m-2" ></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link onClick={() => setNav("adduser")} className={`nav-link text-white ${nav === "adduser" && "active"}`}>
                  <i class="bi bi-person-add m-2"></i>
                    Add User
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link onClick={() => setNav("manageuser")} className={`nav-link text-white ${nav === "manageuser" && "active"}`}>
                  <i class="bi bi-person-lines-fill m-2"></i>
                    Manage User
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link onClick={() => setNav("addproject")} className={`nav-link text-white ${nav === "addproject" && "active"}`}>
                  <i class="bi bi-file-earmark-plus m-2"></i>
                    Add Project
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link onClick={() => setNav("reports")} className={`nav-link text-white ${nav === "reports" && "active"}`}>
                  <i class="bi bi-file-earmark-text m-2"></i>
                    Reports
                  </Link>
                </li>
              </ul>
              <hr  className=" text-white size-3 bg-black"/>
              
              <button className="btn  bi bi-box-arrow-left btn-danger" onClick={handleLogout}>  Logout</button>
              </div>
            
          </div>
          <div className="col-md-9">
            <div className="col">
              <div className="row">
                <div className="h-10">
                  <Container>
                    <Navbar expand="lg" className="bg-body-tertiary mt-2 form-control-lg  shadow-sm px-3">
                      <Form className="d-flex flex-grow-1 ">
                        <Navbar.Brand onClick={toggleSidebar}>
                          {sidebarOpen ? <i className="bi bi-chevron-left"></i> : <i className="bi bi-list fs-4"></i>}
                        </Navbar.Brand>
  
  
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2 flex-grow-1"
                          aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                      </Form>
                    </Navbar>
                  </Container>
                </div>
                <div className="h-90">
                  {nav === "home" && <ManagerDashboardHome />}
                  {nav === "reports" && <Reports />}
                  {nav === "adduser" && <AddUser />}
                  {nav === "manageuser" && <UserList />}
                  {nav === "addproject" && <AddProject/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ManagerDash;
