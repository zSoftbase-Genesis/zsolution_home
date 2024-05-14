import React, { Component } from "react";
import Fade from "react-reveal";
import Zmage from "react-zmage";

class About extends Component {
  render() {
    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row d-">
            {/* <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="zSolutions Limited Pic"
              />
            </div> */}
            <div className="text-center">
              <h2>Why Choose us</h2>
              <br />
              <br />
              <div className="row d-flex">
                <div>
                  <Zmage alt={'trust'} src="images/trust.png" />
                  <p>Expertise You Can TrusT</p>
                </div>
                <div>
                  <Zmage alt={'jigsaw'} src="images/jigsaw.png" />
                  <p>Tailored Solutions</p>
                </div>
                <div>
                  <Zmage alt={'support'} src="images/customer-service.png" />
                  <p>Reliable Support</p>
                </div>
              </div>
              <div className="row d-flex">
                <div>
                  <Zmage alt={'excellence'} src="images/excellence.png" />
                  <p>Commitment to Excellence</p>
                </div>
                <div>
                  <Zmage alt={'pricing'} src="images/trade.png" />
                  <p>Affordable Pricing</p>
                </div>
                <div>
                  <Zmage alt={'customer'} src="images/target.png" />
                  <p>Customer-Centric Approach</p>
                </div>
              </div>
              {/* <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
