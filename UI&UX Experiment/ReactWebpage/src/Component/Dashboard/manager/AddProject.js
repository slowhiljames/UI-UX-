import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ManagerProjectForm = () => {
  const [billingName, setBillingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const[email, setEmail]= useState("");
  const[number, setNumber]= useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/project/addproject", {
        name: billingName,
        address: billingAddress,
        email: email,
        number: number,

      });
      console.log(response.data);
      toast("Project Added Successfully and sent to admin")
      setBillingName("");
      setBillingAddress("");
      setEmail("");
      setNumber("");
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="container">
      <div className="  justify-content-center align-items-center pt-3">
        <div className="bg-white p-5 rounded">
          <h2 className="text-center font-bold ">Add New Project</h2>
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Billing Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Billing Name"
                autoComplete="off"
                name="billingName"
                id="billingName"
                className="form-control rounded-1"
                value={billingName}
                onChange={(e) => setBillingName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address">
                <strong>Billing Address</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Billing Address"
                autoComplete="off"
                name="address"
                id="address"
                className="form-control rounded-1"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email ID"
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
                <strong>office Contact Number</strong>
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
            </div>
            <hr></hr>
            
            <button type="submit" className="btn btn-success w-100 rounded-3">
              Add project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManagerProjectForm;
