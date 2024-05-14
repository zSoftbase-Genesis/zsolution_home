import React, { Component } from "react";
import Fade from "react-reveal";
import Zmage from "react-zmage";

class Clients extends Component {
  render() {
    return (
      <section id="resume">
        <Fade duration={1000}>
          <div className="row d-flex">
            <Zmage alt={'ctmfb'} src="images/clients/ctmfb.jpg" />
            <Zmage alt={'pajuno'} src="images/clients/pajuno.jpg" />
            <Zmage alt={'kongapay'} src="images/clients/kongapay.png" />
          </div>
          <div className="row d-flex mt-4">
            <Zmage alt={'inspirelagos'} src="images/clients/inspirelagos.png" />
            <Zmage alt={'blockhq'} src="images/clients/blockhq.jpg" />
            <Zmage alt={'prunny'} src="images/clients/prunny.png" />
          </div>
        </Fade>
      </section>
    );
  }
}

export default Clients;
