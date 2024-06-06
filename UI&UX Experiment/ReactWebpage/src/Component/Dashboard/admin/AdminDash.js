import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import UserList from "./UserList";
import Reports from "./Reports";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AdminDashboardHome from "./Home";
import AdminAddProject from "./AddProject";

function AdminDash() {
  const [nav, setNav] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // logout request
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post("http://localhost:5000/logout")
      .then((res) => {
        if (res.data.status === "success") {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          console.error("Logout failed:", res.data);
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
  return (
    <div className="p-0 vh-50 ">
      <div className="row">
        <div
          className={`col-md-3 vh-100 d-md-flex flex-column flex-shrink-0 bg-dark shadow-sm ${
            sidebarOpen ? "sidebar" : ""
          }`}
        >
          <div className="d-md-flex flex-column flex-shrink-0 p-2 py-2">
            <Link className="d-flex  mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none gap-5">
              <span className="fs-4 text-white bi bi-speedometer2">
                {" "}
                Admin Dashboard
              </span>
              <Form className="d-flex flex-grow-1  ml-5">
                <Navbar.Brand onClick={toggleSidebar}>
                  {sidebarOpen ? (
                    <i class="bi bi-x-circle"></i>
                  ) : (
                    <i className="bi bi-list fs-4"></i>
                  )}
                </Navbar.Brand>
              </Form>
            </Link>

            <hr className=" text-white size-3 bg-black" />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item form-control-lg">
                <Link
                  onClick={() => setNav("home")}
                  className={`nav-link text-white ${
                    nav === "home" && "active"
                  }`}
                >
                  <i className="bi bi-house m-2"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item form-control-lg">
                <Link
                  onClick={() => setNav("adduser")}
                  className={`nav-link text-white ${
                    nav === "adduser" && "active"
                  }`}
                >
                  <i className="bi bi-person-add m-2"></i>
                  Add User
                </Link>
              </li>
              <li className="nav-item form-control-lg">
                <Link
                  onClick={() => setNav("manageuser")}
                  className={`nav-link text-white ${
                    nav === "manageuser" && "active"
                  }`}
                >
                  <i className="bi bi-person-gear m-2"></i>
                  Manage User
                </Link>
              </li>
              <li className="nav-item form-control-lg">
                <Link
                  onClick={() => setNav("addproject")}
                  className={`nav-link text-white ${
                    nav === "addproject" && "active"
                  }`}
                >
                  <i className="bi bi-file-earmark-plus m-2"></i>
                  Add Project
                </Link>
              </li>
              <li className="nav-item form-control-lg">
                <Link
                  onClick={() => setNav("reports")}
                  className={`nav-link text-white ${
                    nav === "reports" && "active"
                  }`}
                >
                  <i className="bi bi-file-earmark-text m-2"></i>
                  Reports
                </Link>
              </li>
            </ul>
            <hr className=" text-white size-3 bg-black" />

            <button
              className="btn  bi bi-box-arrow-left btn-danger"
              onClick={handleLogout}
            >
              {" "}
              Logout
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <div className="col">
            <div className="row">
              
              <div className="h-90">
                {nav === "home" && <AdminDashboardHome />}
                {nav === "reports" && <Reports />}
                {nav === "adduser" && <AddUser />}
                {nav === "manageuser" && <UserList />}
                {nav === "addproject" && <AdminAddProject />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
