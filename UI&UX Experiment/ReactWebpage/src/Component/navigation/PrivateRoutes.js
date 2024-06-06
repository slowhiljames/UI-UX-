import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const token =  true;//localStorage.getItem("token"); 
  const role = "manager";// localStorage.getItem("role");

  if (token) {
    if (role === "admin") {
      return <Outlet />;
    } else if (role === "manager") {
      return <Outlet />;
    } else if (role === "siteeng") {
      return <Outlet />;
    } else if (role === "client") {
      return <Outlet />;
    } else {
      toast("Role not found Please login Again");
      navigate("/login");
    }
  } else {
    toast("Token Not Found Please Login Again");
    navigate("/login");
  }
};

export default PrivateRoutes;
