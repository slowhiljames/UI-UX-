import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const userData = { name, email, number, role, password };
    console.log(userData)
    axios
      .post("http://localhost:5000/user/signup", userData, { headers })
      .then((res) => {
        toast("User Registerrd successfully")
        handleSubmits();
      })
      .catch((err) => {
        console.error("Signup error:", err);
      });
  };
  const handleSubmits = (e) => {
    
    
    setName('');
    setEmail('');
    setNumber('');
    setRole('');
    setPassword('');
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center pt-3">
        <div className="bg-white p-5 rounded ">
          <h2 className="text-center font-bold ">Register New User</h2>
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                id="name"
                className="form-control rounded-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                autoComplete="off"
                name="email"
                id="email"
                className="form-control rounded-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="number">
                <strong>Phone Number</strong>
              </label>
              <input
                type="number"
                placeholder="Enter Phone Number"
                autoComplete="off"
                name="number"
                id="number"
                className="form-control rounded-1"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <div className="mb-3">
                <label htmlFor="role">
                  <strong>User Role</strong>
                </label>
                <select className="form-select" aria-label="Default select example" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option> 
                  <option value="client">Client</option>
                  <option value="siteeng">Site Engineer</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                id="password"
                className="form-control rounded-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-3">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
