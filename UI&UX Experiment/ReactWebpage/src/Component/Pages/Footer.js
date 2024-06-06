import React from 'react';
import dcc1 from "../images/dcc1.png"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container-fluid footers text-light">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-2 pt-5">
          <div className="col flex justify-content-center align-items-center h-auto">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <img src={dcc1}
                     width= "100"
                     alt="Logo" />
            </a>
            <h1>DCC</h1>
          </div>


          <div className="col mb-3 text-light">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
            </ul>
          </div>

          <div className="col mb-3 text-light">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
            </ul>
          </div>

          <div className="col mb-3 text-light">
            <h5>Section</h5>
            <ul className="nav flex-column text-light">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid footer">
        <div className="py-3 text-light">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link px-2 text-white">Services</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-white">Contact</Link></li>
          </ul>
          <p className="text-center text-white">© 2024 All Rights Reserved || DYNAMIC CONCRETE CONSULTANCY(DCC), Inc</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
