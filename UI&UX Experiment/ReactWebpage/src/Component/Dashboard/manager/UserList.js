import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/getuser")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        toast("Error:"+ error.message)
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 pt-3">
          <div className="card">
            <div className="card-header text-center">
              <h4>User List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Number</th>
                      <th scope="col">Password</th>
                      <th scope="col">Role</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.number}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                        <td>Edit</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
