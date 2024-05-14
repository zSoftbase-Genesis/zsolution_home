import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Clients from "./Components/Clients";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  home = () => (
    <div className="App">
      <Header data={this.state.resumeData.main} />
      <About data={this.state.resumeData.main} />
      <Resume data={this.state.resumeData.resume} />
      <Portfolio data={this.state.resumeData.portfolio} />
      <Clients />
      <Footer data={this.state.resumeData.main} />
    </div>
  );

  contactPage = () => (
    <Contact data={this.state.resumeData.main} />
  )

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={this.home} />
          <Route exact path='/contact' component={this.contactPage} />
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}

export default App;
