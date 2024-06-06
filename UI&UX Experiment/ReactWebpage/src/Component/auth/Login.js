import { useRef,} from "react";
import { Link,  useLocation , useNavigate} from "react-router-dom";
import axios from "axios";
import dcc1 from "../images/dcc1.png"
import toast from "react-hot-toast";

const LoginForm = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const Role= location.state?.role ;
  console.log(Role)

  // console.log(location.state);
  

  const emailRef= useRef("")
  const passRef= useRef("")



  const handleSubmit = (e) => {
    
  const email = emailRef.current.value;
  const pass = passRef.current.value;
    e.preventDefault();
    // const headers = {
    //   'Content-Type': 'application/json'
    // };
    const userData = { email:email, password:pass, role:Role };
    // console.log(userData);
    axios
      .post(
        "http://192.168.28.92:5000/auth/login", userData,
        // { headers },
    
      )
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", res.data.role);
          
          if (res.data.role === "admin") {
            navigate("/admin");
          } else if (res.data.role === "manager") {
            navigate("/manager");
          } else if (res.data.role === "siteeng") {
            navigate("/siteeng");
          } else {
            navigate("/client");
          }
        } else {
          toast("Login failed: " + res.data);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Login error: " + err.message);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5  bg-white shadow box-area p-5 py-5">
        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box p-5 bg-warning h-auto"
          
        >
          <div className="featured-image mb-3">
            <img
              src={dcc1}
              className="img-fluid"
              style={{ width: "5em"}}
              alt="featured"

            />
          </div>
          <p className="text-black fs-2">Be Verified</p>
          <small className="text-black text-wrap text-center pb-4">
            DYNAMIC CONCRETE CONSULTANCY
          </small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4 text-center">
              <h2>Hello {Role} Please Login</h2>
              <p>We are happy to have you back.</p>
            </div>
            <form onSubmit={handleSubmit}> {/* Use standard form element */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                  autoComplete="off"
                  autoCorrect="off"
                  name="email"
                  id="email"
                  ref={emailRef}
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  ref={passRef}
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between"></div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6">
                  Login
                </button>
              </div>
            </form>
            <div className="forgot">
              <Link to="/contact">
                <small>
                  Don't have an account? || Forgot Password -Contact Admin
                </small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
