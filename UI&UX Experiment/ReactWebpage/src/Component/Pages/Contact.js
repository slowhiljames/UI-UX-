import React, { useState } from "react";

function Contact() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    number: "",
    cname: "",
    subject: "",
  });
  const [inputFilled, setInputFilled] = useState({
    name: false,
    email: false,
    number: false,
    cname: false,
    subject: false,
  });

  const data = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
    setInputFilled({ ...inputFilled, [name]: !!value }); 
    console.log(user)
  };

  const getdata = async (e)=>{
    const {name , email, number, cname, subject}= user;
    e.preventDefault();
    const options ={
      method:'POST',
      headers:{
        'content-type':'application/json;'
      },
      body: JSON.stringify({
        name, email, number, cname, subject
      })
    }
    const res = await fetch(
      'https://altravision-29cc6-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json',
       options
    )
    if(res){
      alert('Response Saved Successfully')
    }
    else{
      alert('error occured')
    }
  }

  return (
    <div>
      <div className="form-control-lg container bg-custom-colors mb-5 mt-5">
        <div className="container form-control-lg px-4 py-5 p-1 bg-custom-colors">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-3 px-2 py-3">
                LET'S BEGIN YOUR PROJECT WITH "DYNAMIC CONCRETE CONSULTANCY"
              </h1>

              <h3> Contact No: +918484846201</h3>
              <h3>Email ID: support@dccrmc.com</h3>
            </div>
            <div className="col-md-10 mx-auto col-lg-5 container">
              {/* form contact us */}

              <form
                className="p-4  border rounded-3 bg-body-tertiary"
              >
                <div className={`form-floating mb-3 ${inputFilled.name ? 'filled' : ''}`}>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={user.name}
                    name="name"
                    placeholder="Name"
                    onChange={data}
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className={`form-floating mb-3 ${inputFilled.email ? 'filled' : ''}`}>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email}
                    name="email"
                    onChange={data}
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className={`form-floating mb-3 ${inputFilled.number ? 'filled' : ''}`}>
                  <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    onChange={data}
                    value={user.number}
                    name="number"
                    placeholder="Mobile Number"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="mobile">Mobile Number</label>
                </div>
                <div className={`form-floating mb-3 ${inputFilled.cname ? 'filled' : ''}`}>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={user.cname}
                    name="cname"
                    placeholder="Company Name"
                    onChange={data}
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="address">Company Name</label>
                </div>
                <div className={`form-floating mb-3 ${inputFilled.subject ? 'filled' : ''}`}>
                  <textarea
                    className="form-control"
                    id="comments"
                    name="subject"
                    onChange={data}
                    value={user.subject}
                    placeholder="Subject"
                    rows="4"
                    autoComplete="off"
                    required
                  ></textarea>
                  <label htmlFor="comments">Subject</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={getdata}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
