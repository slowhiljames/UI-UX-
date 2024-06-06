import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../images/heroVideo.mp4";

function Home() {
  const buttonStyle = {
    backgroundColor: "blue",
    padding: "8px 16px",
    borderRadius: "6px",
    color: "#ffffff",
    textDecoration: "none",
  };

  return (
    <div>
      <div className="mt-2 mb-2">
        <div className="video-container">
          <video autoPlay loop muted className="background-video">
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content text-center">
            <div className="p-md-3 m-md-1 text-center lorn">
              <div className="mx-auto">
                <h1 className="display-2 fw-bold">
                  DYNAMIC CONCRETE CONSULTANCY (DCC)
                </h1>
                <h3 className="fw-normal text-dark-emphasis">
                  DCC is your trusted partner that delivers quality testing lab
                  services and ensures complete safety and regulatory compliance
                  with our testing, inspection, and certification services. DCC
                  is the best laboratory testing service provider in India.
                </h3>
                <div className="d-flex form-control-lg justify-content-center text-center">
                  <Link to="/about">
                    <button
                      className="icon-link rounded-5 btn btn-primary card shadow-lg"
                      style={buttonStyle}
                    >
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */} {/* Featured Boxes */}

        <div className="container pb-5 pt-5" >
          <h2 className="pb-1 border-bottom text-center display-6 fw-bold pb-5">
            Testing Services
          </h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-lg-5">
            <div className="col">
            <div className="d-flex justify-content-center align-items-center text-center bg-custom-colors p-xl-5  card shadow-lg py-3">
              <div>
                <h3 className="fs-2 text-body-emphasis">Chemical</h3>
                <p>
                  Ensure material integrity with our precise chemical testing
                  services.
                </p>
                <Link to="/services">
                  <button className="btn btn-primary">KNOW MORE</button>
                </Link>
              </div>
            </div>
            </div>

            <div className="col">
            <div className="d-flex justify-content-center align-items-center text-center bg-custom-colors p-xl-5  card shadow-lg py-3">
              <div>
                <h3 className="fs-2 text-body-emphasis">Coarse Aggregate</h3>
                <p>
                  Assess the quality and suitability of coarse aggregates
                  through thorough testing and analysis.
                </p>
                <Link to="/services">
                  <button className="btn btn-primary">KNOW MORE</button>
                </Link>
              </div>
            </div>
            </div>

            <div className="col">
            <div className="d-flex justify-content-center align-items-center text-center bg-custom-colors p-xl-5  card shadow-lg py-3">
              <div>
                <h3 className="fs-2 text-body-emphasis">Fine Aggregate</h3>
                <p>
                  Evaluate the quality and properties of fine aggregates through
                  comprehensive testing.
                </p>
                <Link to="/services">
                  <button className="btn btn-primary">KNOW MORE</button>
                </Link>
              </div>
            </div>
            </div>

            <div className="col">
            <div className="d-flex justify-content-center align-items-center text-center bg-custom-colors p-xl-5  card shadow-lg py-3">
              <div>
                <h3 className="fs-2 text-body-emphasis">Clay Brunt Bricks</h3>
                <p>
                  Assess the structural integrity and durability of clay burnt
                  bricks through rigorous testing procedures.
                </p>
                <Link to="/services">
                  <button className="btn btn-primary">KNOW MORE</button>
                </Link>
              </div>
            </div>
            </div>
            <div className="col">
            <div className="d-flex justify-content-center align-items-center text-center bg-custom-colors p-xl-5  card shadow-lg py-3">
              <div>
                <h3 className="fs-2 text-body-emphasis">Paver Block</h3>
                <p>
                  Determine the strength, durability, and performance of paver
                  blocks through rigorous testing protocols.
                </p>
                <Link to="/services">
                  <button className="btn btn-primary">KNOW MORE</button>
                </Link>
              </div>
            </div>
            </div>
            <div className="col">
            <div className="d-flex justify-content-center align-items-center text-center bg-custom-colors p-xl-5  card shadow-lg py-3">
              <div>
                <h3 className="fs-2 text-body-emphasis">Natural Stone</h3>
                <p>
                  Evaluate the quality, durability, and suitability of natural
                  stone materials through comprehensive testing procedures.
                </p>
                <Link to="/services">
                  <button className="btn btn-primary">KNOW MORE</button>
                </Link>
              </div>
            </div>
            </div>
            <div className="col">
            <div className="d-flex justify-content-center align-items-center text-center bg-custom-colors p-xl-5  card shadow-lg py-3">
              <div>
                <h3 className="fs-2 text-body-emphasis">Steel Bar</h3>
                <p>
                  Ensure the quality, strength, and durability of steel bars
                  through rigorous testing and analysis.
                </p>
                <Link to="/services">
                  <button className="btn btn-primary">KNOW MORE</button>
                </Link>
              </div>
            </div>
            </div>
            <div className="col">
            <div className="d-flex justify-content-center align-items-center text-center bg-custom-colors p-xl-5  card shadow-lg py-3">
              <div>
                <h3 className="fs-2 text-body-emphasis">Soil</h3>
                <p>
                  Determine the composition, characteristics, and suitability of
                  soil for various applications through comprehensive testing
                  and analysis.
                </p>
                <Link to="/services">
                  <button className="btn btn-primary">KNOW MORE</button>
                </Link>
              </div>
            </div>
            </div>
            <div className="col">
            <div className="d-flex justify-content-center align-items-center bg-custom-colors p-xl-5  card shadow-lg text-center py-3">
              <div>
                <h3 className="fs-2 text-body-emphasis">Bitumen</h3>
                <p>
                  Assess the quality, viscosity, and durability of bitumen
                  through rigorous testing and analysis.
                </p>
                <Link to="/services">
                  <button className="btn btn-primary">KNOW MORE</button>
                </Link>
              </div>
          </div>
          </div>
        </div>
        </div>

        {/* Why Choos us */}

        <div className="container pb-5 pt-5">
      <h1 className="pb-1 border-bottom text-center display-6 fw-bold">
        Why Choose Us
      </h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center align-items-center pt-2">
        <div className="col">
          <div className="card bg-white h-100 shadow-lg">
            <div className="card-body d-flex align-items-center justify-content-center p-xl-5">
              <i className="bi bi-gear text-body-secondary" style={{ fontSize: "3em" }}></i>
              <div className="ms-3">
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  System based concrete mix design
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-white h-100 shadow-lg">
            <div className="card-body d-flex align-items-center justify-content-center p-xl-5">
              <i className="bi bi-graph-up text-body-secondary" style={{ fontSize: "3em" }}></i>
              <div className="ms-3">
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Quality based 15 Method material testing
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-white h-100 shadow-lg">
            <div className="card-body d-flex align-items-center justify-content-center p-xl-5">
              <i className="bi bi-envelope-arrow-down text-body-secondary" style={{ fontSize: "3em" }}></i>
              <div className="ms-3">
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Proper Reporting by E-Mail & Hardcopy Format
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-white h-100 shadow-lg">
            <div className="card-body d-flex align-items-center justify-content-center p-xl-5">
              <i className="bi bi-exclamation-circle text-body-secondary" style={{ fontSize: "3em" }}></i>
              <div className="ms-3">
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Zero Tension Systems
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-white h-100 shadow-lg">
            <div className="card-body d-flex align-items-center justify-content-center p-xl-5">
              <i className="bi bi-people text-body-secondary" style={{ fontSize: "3em" }}></i>
              <div className="ms-3">
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Our team ensures client satisfaction with full dedication
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-white h-100 shadow-lg">
            <div className="card-body d-flex align-items-center justify-content-center p-xl-5">
              <i className="bi bi-tools text-body-secondary" style={{ fontSize: "3em" }}></i>
              <div className="ms-3">
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Managing and Controlling all the parameters of fresh concrete
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* Call Now */}
        
        <div className="position-relative overflow-hidden text-center shadow-sm mt-2 mb-md-2 p-5">
          <div className="bg-custom-colors py-5 form-control-lg container-fluid">
            <h3 className="oranges bold">
              We Ensure our Performance Meet your Expectations!
            </h3>
            <h1 className="text-body-emphasis">EXPERTISE</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted">
              We know you rely on us to keep your business moving forward. We
              make sure the results come in as expected by managing the speedy
              sample collection, and high-quality testing followed by a quick
              response. Get your tailored support today!
            </p>
            <h3>Contact No: +918888886201</h3>
            <h3>Email ID: support@dccrmc.com</h3>
            <div className="d-inline-flex gap-2 pt-2 pb-2">
              <Link to="/contact">
                <button
                  className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                  type="button"
                >
                  Call to action
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
          <h2 className="fw-normal">Heading</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <div className="col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
          <h2 className="fw-normal">Heading</h2>
          <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <div className="col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
          <h2 className="fw-normal">Heading</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
          <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div className="col-md-5">
          <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
          <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
          <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
        </div>
        <div className="col-md-5">
          <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
        </div>
      </div>
      <hr className="featurette-divider" />
    </div>
    </div>
    </div>

  );
}

export default Home;
