import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
  changeRoute = () => {
    window.location.href = '/contact'
  }
  render() {
    if (!this.props.data) return null;

    // const project = this.props.data.project;
    // const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        {/* <ParticlesBg type="circle" bg={true} /> */}

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Why Choose Us
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Our Services
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Industries
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#clients">
                Clients
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
