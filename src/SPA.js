import React, { Component } from "react";
import logo from "./logo.svg";
import "./containers/SPA.css";
import Navbar from "./containers/Navbar";
import Section from "./containers/Section";
import Tour from './containers/Tour';
import Home from './containers/Home';
import Listen from './containers/Listen';
import Media from './containers/Media';
import Contact from './containers/Contact';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
class SPA extends Component {

    render() {
        var homepage = <Home />;
        var tourpage = <Tour />;
        var listenpage = <Listen />;
        var mediapage = <Media />;
        var contactpage = <Contact />;
        
    return (
      <div className="App">
        <Navbar />
        <Section
          title={homepage}
          dark={false}
          id="section1"
        />
        <Section
          title={tourpage}
          dark={true}
          id="section2"
        />
        <Section
          title={listenpage}
          dark={false}
          id="section3"
        />
        <Section
          title={mediapage}
          dark={true}
          id="section4"
        />
        <Section
          title={contactpage}
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}

export default SPA;