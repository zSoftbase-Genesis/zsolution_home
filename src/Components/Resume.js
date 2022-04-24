import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skills = this.props.data.skills.map((skills) => {

      return (
        <div className="columns portfodivo-item our-service">
          <h3>{skills.name}</h3>
          <p>
            {skills.description}
            {/* <span>...read more</span> */}
          </p>
        </div>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
              <h1>
                <span>Our Services</span>
              </h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf d-grid"
            >
              <div className="d-grid">{skills}</div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
