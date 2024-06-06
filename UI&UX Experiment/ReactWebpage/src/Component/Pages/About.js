import React from 'react';

function About() {
  return (
    <div className="container-fluid form-control-lg text-white">
      <div className="main">
        <h2 id="ab-1">About Us</h2>
      </div>

      <section className="about-us text-center py-5">
        <div className="container">
          <h5 className="mrg-btn">Overview</h5>
          <hr className="my-4" />
          <p className="lead">
            Altra Vision Test House Private Limited is an unlisted private company incorporated on 06 November,
            2023. It is classified as a private limited company and is located in Maharashtra. Its authorized
            share capital is INR 1.00 lac, and the total paid-up capital is INR 1.00 lac.<br />
            Details of the last annual general meeting of Altra Vision Test House Private Limited are not available.
            The company is yet to submit its first full-year financial statements to the registrar.
          </p>
        </div>
      </section>

      <div className="container shadow-sm p-5 text-dark">
        <h5 className="mrg-btn text-center">Who we are</h5>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6">
            <div className="rm-drctr">x
              <p className="clr-1">Ram Birajdar = Diretor Altravision</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="aml-drctr">
              <p className="clr-1">Amol Randive = Diretor Altravision</p>
            </div>
          </div>
        </div>
      </div>

      <section className="about-us text-center py-5">
        <div className="container">
          <h5 className="mrg-btn">How we work</h5>
          <hr className="my-4" />
          <p className="lead">
            Cement testing is a procedure used to determine the quality and characteristics of Cement. These tests
            include physical, chemical, and performance testing. The most common cement tests include compressive
            strength, setting time, soundness, and fineness.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
